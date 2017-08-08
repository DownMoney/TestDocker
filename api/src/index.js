'use strict';

const express = require('express');
const http = require('http');
// Constants
const PORT = 3050;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

  var options = {
    hints:0,
  host: 'frontend',
  port: 80,
  path: '/index.html'
};

http.get(options, function(res2) {
  console.log("Got response: " + res2.statusCode);
  res.send('Hello world\n' + res2.statusCode);

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});



});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
