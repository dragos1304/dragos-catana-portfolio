<?php
// Copy to config.php ON THE SERVER (same folder) and fill in. config.php is never committed.
return [
    'to' => 'you@example.com',                   // where form submissions are delivered
    'from' => 'no-reply@dragoscatana.com',       // must be an address on your own domain (SPF/DKIM)
    // Authenticated SMTP (recommended: plain mail() from the web host is usually rejected by iCloud/Gmail).
    // For iCloud: user = your Apple ID, pass = an app-specific password from appleid.apple.com.
    'smtp' => ['host' => 'smtp.mail.me.com', 'port' => 587, 'user' => 'apple-id@example.com', 'pass' => 'app-specific-password'],
    // Test mode: uncomment to send every visitor confirmation to this address instead of the visitor.
    // 'confirm_to' => 'test@dragoscatana.com',
    'allowed_hosts' => ['dragoscatana.com', 'www.dragoscatana.com'],
];
