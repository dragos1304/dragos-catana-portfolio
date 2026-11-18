<?php
// Copy to config.php ON THE SERVER (same folder) and fill in. config.php is never committed.
return [
    'to' => 'you@example.com',                   // where form submissions are delivered
    'from' => 'no-reply@dragoscatana.com',       // must be an address on your own domain (SPF/DKIM)
    'allowed_hosts' => ['dragoscatana.com', 'www.dragoscatana.com'],
];
