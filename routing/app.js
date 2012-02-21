var server     = require(__dirname + "/server")
  , routes     = require(__dirname + "/routes")
  , controller = require(__dirname + "/controller"); 


var handle = {}

handle["/"]      = controller.smack
handle["/smack"] = controller.smack
handle["/bang"]  = controller.bang

server.boot(routes.route, handle);
