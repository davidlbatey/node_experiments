var url = require("url");

function route(request, response){
  
  var pathname = url.parse(request.url).pathname;
  console.log("New request for " + pathname)

  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Woosh!");
  response.end();
}

exports.route = route
