var net = require("net");

var server = net.createServer( function(socket){
  socket.write("Pow! Bang! Wallop!");
});

server.listen(3000);
