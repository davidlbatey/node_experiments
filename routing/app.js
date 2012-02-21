var server = require(__dirname + "/server.js")
  , routes = require(__dirname + "/routes.js");

server.boot(routes.route);
