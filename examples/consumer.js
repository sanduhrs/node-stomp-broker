#!/usr/bin/env node

var StompClient = require('../client');
var consumer = new StompClient.StompClient('127.0.0.1', 8125, 'username', 'password');

consumer.on('connect', function() {
  console.log('connect');
  this.subscribe('/queue/test', function(data) {
    console.log(data);
  });
});

consumer.on('disconnect', function() {
  console.log('disconnect');
});
