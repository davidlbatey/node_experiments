var http = require("http");

function boot(routes){
  var server = http.createServer(routes);

  server.listen(3000);

  console.log("Server started - listening on port 3000");
}

exports.boot = boot
