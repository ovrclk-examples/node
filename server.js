var http = require('http');

var server = http.createServer(function (request, response) {
  console.log("received request for " + request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8080);

console.log("Server running on port 8080");
