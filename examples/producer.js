#!/usr/bin/env node

var StompClient = require('../client');
var producer = new StompClient.StompClient('127.0.0.1', 8125, 'username', 'password');

producer.on('connect', function() {
  this.publish('/queue/test', 'HelloWorld.');
});

producer.on('disconnect', function() {
  console.log('disconnect');
});