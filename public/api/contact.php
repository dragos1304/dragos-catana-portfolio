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

// Same-site requests only.
$origin = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');
if ($allowedHosts && $origin !== '') {
    $host = parse_url($origin, PHP_URL_HOST) ?: '';
    if (!in_array($host, $allowedHosts, true)) {
        respond(403, ['ok' => false, 'error' => 'forbidden']);
    }
}

// Spam traps: honeypot must be empty; a human takes at least 3 seconds to fill the form.
if (trim((string)($_POST['bot-field'] ?? '')) !== '') {
    respond(200, ['ok' => true]); // pretend success to bots
}
$ts = (int)($_POST['ts'] ?? 0);
if ($ts > 0 && (time() - intdiv($ts, 1000)) < 3) {
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

$kind = ($_POST['form-name'] ?? '') === 'audit' ? 'audit' : 'contact';
$name = clean((string)($_POST['name'] ?? ''), 120);
$email = clean((string)($_POST['email'] ?? ''), 160);
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || ($_POST['consent'] ?? '') !== 'da') {
    respond(422, ['ok' => false, 'error' => 'invalid']);
}

$fields = $kind === 'audit'
    ? ['website' => 'Website', 'business' => 'Tip afacere', 'city' => 'Oraș', 'competitors' => 'Concurenți']
    : ['website' => 'Website', 'need' => 'Nevoie', 'message' => 'Mesaj'];

$lines = ["Nume: $name", "Email: $email"];
foreach ($fields as $key => $label) {
    $lines[] = $label . ': ' . clean((string)($_POST[$key] ?? ''), 3000);
}
$lines[] = 'Consimțământ: da (' . gmdate('Y-m-d H:i') . ' UTC)';

$subject = $kind === 'audit' ? 'Cerere audit gratuit AI' : 'Mesaj nou din contact';
$headers = [
    'From: Site dragoscatana.com <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: dragoscatana-form',
];
$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), implode("\r\n", $headers));

if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'mail_failed']);
}
$hits[] = time();
@file_put_contents($rlFile, implode(',', $hits));
respond(200, ['ok' => true]);
