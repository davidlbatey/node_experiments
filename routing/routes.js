function route(request, response){
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Woosh!");
  response.end();
}

exports.route = route
