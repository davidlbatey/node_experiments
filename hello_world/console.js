var http = require('http');

var server = http.createServer( function (request, response){
  console.log("Hello world - how boring");
  response.end();
});

server.listen(3000);
