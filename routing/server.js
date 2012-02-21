var http = require("http")
  , url  = require("url");

function boot(routes, handle){
  var server = http.createServer( function (request, response){
      
      var pathname = url.parse(request.url).pathname;
      routes(handle, pathname);

      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Woooot!");
      response.end();
  }
  );

  server.listen(3000);

  console.log("Server started - listening on port 3000");
}

exports.boot = boot
