var http = require('http');

var server = http.createServer(function(request, response){  
    response.writeHeader(200, {"Content-Type":"text/plain"}); 
    response.write("Boom. Hello");
    response.end();
});

server.listen(3000);
