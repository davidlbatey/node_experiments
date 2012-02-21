var fs   = require('fs')
  , http = require('http')

function boot() {
  http.createServer(function(request, response){

    fs.readFile(__dirname + '/views/boom.html', 'utf8',function (err, data) {

	if (err) { 
	  response.writeHead(500);
	  return response.end('Error loading boom.html'); 
	}

	response.writeHead(200, {"Content-Type":"text/html"});                                                  
	response.end(data);
      });  

  }).listen(3000);
  
  console.log('Booting server');
}

exports.boot = boot
