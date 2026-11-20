<?php
// Form handler for the static site (Network Solutions / any PHP host).
// Receives the "audit" and "contact" forms and emails them to the address in config.php.
// Setup: copy config.example.php to config.php on the server and fill it in. Never commit config.php.

declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}
$config = require $configFile;
$to = (string)($config['to'] ?? '');
$from = (string)($config['from'] ?? '');
$allowedHosts = (array)($config['allowed_hosts'] ?? []);
if (!filter_var($to, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    respond(500, ['ok' => false, 'error' => 'bad_config']);
}

// The lead form contract, generated at build time from lib/lead-form.ts (the form reads the same source).
$contractFile = __DIR__ . '/form-contract.json';
$contract = is_file($contractFile) ? json_decode((string)file_get_contents($contractFile), true) : null;
if (!is_array($contract) || ($contract['version'] ?? 0) !== 1) {
    respond(500, ['ok' => false, 'error' => 'contract_missing']);
}
$meta = $contract['meta'];

// Same-site requests only.
$origin = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');
if ($allowedHosts && $origin !== '') {
    $host = parse_url($origin, PHP_URL_HOST) ?: '';
    if (!in_array($host, $allowedHosts, true)) {
        respond(403, ['ok' => false, 'error' => 'forbidden']);
    }
}

// Spam traps: honeypot must be empty; a human takes at least 3 seconds to fill the form.
if (trim((string)($_POST[$meta['honeypot']] ?? '')) !== '') {
    respond(200, ['ok' => true]); // pretend success to bots
}
$ts = (int)($_POST[$meta['openedAt']] ?? 0); // milliseconds
if ($ts > 0 && (time() - intdiv($ts, 1000)) < (int)$contract['minSecondsToFill']) {
    respond(200, ['ok' => true]);
}

// Basic per-IP rate limit: 5 submissions per hour.
$ip = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rlFile = sys_get_temp_dir() . '/dc_rl_' . md5($ip);
$hits = [];
if (is_file($rlFile)) {
    $hits = array_filter(array_map('intval', explode(',', (string)file_get_contents($rlFile))), fn($t) => $t > time() - 3600);
}
if (count($hits) >= 5) {
    respond(429, ['ok' => false, 'error' => 'rate_limited']);
}

function clean(string $v, int $max): string {
    $v = trim(str_replace(["\r", "\0"], '', $v));
    return mb_substr($v, 0, $max);
}

$kindName = (string)($_POST[$meta['kind']] ?? '');
if (!isset($contract['kinds'][$kindName])) {
    respond(422, ['ok' => false, 'error' => 'unknown_form']);
}
$kind = $kindName;
$form = $contract['kinds'][$kind];
$name = str_replace("\n", ' ', clean((string)($_POST['name'] ?? ''), 120)); // no newlines: header injection
$email = clean((string)($_POST['email'] ?? ''), 160);
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || ($_POST[$meta['consent']] ?? '') !== $contract['consentToken']) {
    respond(422, ['ok' => false, 'error' => 'invalid']);
}

$lines = [];
foreach ($form['fields'] as $field) {
    $value = $field['name'] === 'name' ? $name : clean((string)($_POST[$field['name']] ?? ''), (int)$field['max']);
    if (isset($field['options'][$value])) {
        $value = $field['options'][$value]; // stable option value -> Romanian label
    }
    $lines[] = $field['label'] . ': ' . $value;
}
$lang = in_array($_POST[$meta['lang']] ?? '', $contract['langs'], true) ? (string)$_POST[$meta['lang']] : 'ro';
$lines[] = 'Limba formularului: ' . $lang;
$lines[] = 'Consimțământ: da (' . gmdate('Y-m-d H:i') . ' UTC)';

$subject = $form['subject'] . ($lang === 'en' ? ' [EN]' : '');
$subjectEnc = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$body = implode("\r\n", $lines);
$headers = [
    'From: Site dragoscatana.com <' . $from . '>',
    'Reply-To: ' . str_replace(['<', '>', '"'], '', $name) . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'X-Mailer: dragoscatana-form',
];
$smtp = (array)($config['smtp'] ?? []);
if ($smtp) {
    $sent = smtp_send($smtp, $from, $to, $subjectEnc, $headers, $body);
} else {
    $sent = mail($to, $subjectEnc, chunk_split(base64_encode($body)), implode("\r\n", $headers));
}

/** Minimal authenticated SMTP client (STARTTLS on 587, or implicit TLS on 465). */
function smtp_send(array $c, string $from, string $to, string $subject, array $headers, string $body): bool {
    $host = (string)($c['host'] ?? '');
    $port = (int)($c['port'] ?? 587);
    $user = (string)($c['user'] ?? '');
    $pass = (string)($c['pass'] ?? '');
    if ($host === '' || $user === '' || $pass === '') {
        return false;
    }
    $implicit = $port === 465;
    $fp = @stream_socket_client(($implicit ? 'ssl://' : 'tcp://') . $host . ':' . $port, $errno, $errstr, 15);
    if (!$fp) {
        $GLOBALS['smtp_trace'] = 'connect:' . $errno . ' ' . $errstr;
        return false;
    }
    stream_set_timeout($fp, 15);
    $read = function () use ($fp): array {
        $code = 0;
        $text = '';
        while (($line = fgets($fp, 1024)) !== false) {
            $text .= $line;
            $code = (int)substr($line, 0, 3);
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return [$code, $text];
    };
    $cmd = function (string $line, array $ok, string $label = '') use ($fp, $read): bool {
        fwrite($fp, $line . "\r\n");
        [$code, $text] = $read();
        $GLOBALS['smtp_trace'] = ($label !== '' ? $label : strtok($line, ' ')) . ':' . $code . ' ' . substr(trim($text), 4, 80);
        return in_array($code, $ok, true);
    };
    $ehlo = 'dragoscatana.com';
    [$code, $greet] = $read();
    $GLOBALS['smtp_trace'] = 'greeting:' . $code . ' ' . substr(trim($greet), 4, 80);
    if ($code !== 220 || !$cmd('EHLO ' . $ehlo, [250])) {
        fclose($fp);
        return false;
    }
    if (!$implicit) {
        if (!$cmd('STARTTLS', [220]) || !@stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            $GLOBALS['smtp_trace'] = ($GLOBALS['smtp_trace'] ?? '') . ' (tls-handshake-failed?)';
            fclose($fp);
            return false;
        }
        if (!$cmd('EHLO ' . $ehlo, [250])) {
            fclose($fp);
            return false;
        }
    }
    $ok = $cmd('AUTH LOGIN', [334]) && $cmd(base64_encode($user), [334], 'AUTH-user') && $cmd(base64_encode($pass), [235], 'AUTH-pass')
        && $cmd('MAIL FROM:<' . $from . '>', [250]) && $cmd('RCPT TO:<' . $to . '>', [250, 251]) && $cmd('DATA', [354]);
    if ($ok) {
        $msg = 'To: <' . $to . ">\r\nSubject: " . $subject . "\r\nDate: " . date('r') . "\r\nMessage-ID: <" . bin2hex(random_bytes(12)) . '@dragoscatana.com>' . "\r\n"
            . implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($body));
        $msg = preg_replace('/^\./m', '..', $msg);
        fwrite($fp, $msg . "\r\n.\r\n");
        [$code] = $read();
        $ok = $code === 250;
    }
    @fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return $ok;
}

if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'mail_failed', 'detail' => (string)($GLOBALS['smtp_trace'] ?? 'no-smtp')]);
}
// Confirmation to the visitor (best effort, SMTP only). config 'confirm_to' overrides the recipient: test mode.
if ($smtp) {
    $testTo = (string)($config['confirm_to'] ?? '');
    $confirmTo = $testTo !== '' ? $testTo : $email;
    if (filter_var($confirmTo, FILTER_VALIDATE_EMAIL)) {
        if ($lang === 'en') {
            $cSubject = ($kind === 'audit' ? 'I received your audit request' : 'I received your message') . ($testTo !== '' ? ' [TEST]' : '');
            $cBody = implode("\r\n", [
                'Hi ' . $name . ',',
                '',
                $kind === 'audit'
                    ? 'I received your request for the free AI visibility audit. I am preparing it by hand and will send it within ' . $contract['replyHours'] . ' hours.'
                    : 'I received your message and will reply personally within ' . $contract['replyHours'] . ' hours.',
                '',
                'If you did not send this form, you can ignore this email.',
                '',
                'Dragoș Cătană',
                'https://dragoscatana.com/en/',
            ]);
        } else {
            $cSubject = ($kind === 'audit' ? 'Am primit cererea ta de audit' : 'Am primit mesajul tău') . ($testTo !== '' ? ' [TEST]' : '');
            $cBody = implode("\r\n", [
                'Bună, ' . $name . ',',
                '',
                $kind === 'audit'
                    ? 'Am primit cererea ta pentru auditul gratuit de vizibilitate AI. Îl pregătesc manual și ți-l trimit în maximum ' . $contract['replyHours'] . ' de ore.'
                    : 'Am primit mesajul tău și îți răspund personal în maximum ' . $contract['replyHours'] . ' de ore.',
                '',
                'Dacă nu ai trimis tu acest formular, poți ignora acest email.',
                '',
                'Dragoș Cătană',
                'https://dragoscatana.com',
            ]);
        }
        $cHeaders = [
            'From: Dragos Catana <' . $from . '>',
            'Reply-To: ' . $to,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
            'Auto-Submitted: auto-generated',
        ];
        @smtp_send($smtp, $from, $confirmTo, '=?UTF-8?B?' . base64_encode($cSubject) . '?=', $cHeaders, $cBody);
    }
}
$hits[] = time();
@file_put_contents($rlFile, implode(',', $hits));
respond(200, ['ok' => true]);
