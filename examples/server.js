#!/usr/bin/env node

var StompServer = require('../server');
var server = new StompServer.StompServer(8125).listen();
