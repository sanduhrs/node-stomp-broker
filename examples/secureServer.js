#!/usr/bin/env node

var StompServer = require('../server');

var privateKey = fs.readFileSync('CA/newkeyopen.pem', 'ascii');
var certificate = fs.readFileSync('CA/newcert.pem', 'ascii');
var certificateAuthority = fs.readFileSync('CA/demoCA/private/cakey.pem', 'ascii');
var credentials = crypto.createCredentials({
    key: privateKey,
    cert: certificate,
    ca: certificateAuthority,
});

var server = new StompServer.SecureStompServer(8124, credentials).listen();
