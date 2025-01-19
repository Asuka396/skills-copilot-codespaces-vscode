// create web server
var http = require('http');

// create server
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

// listen on port 3000
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');