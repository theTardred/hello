var express = require('express');
var app = express();
var path = require('path');
var WebSocketServer = require('websocket').server;
var port = 8080;

//app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  console.log('index requested ', req.url);
})

app.use(function (req, res, next) {
  res.status(400).sendFile(path.join(__dirname, 'public', '404.html'));
  console.log('responding with 404');
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
})

app.listen(port, function () {
  console.log('Example app listening on port 8080');
})
