var url = require("url");

function route(handle, pathname){

  console.log("New request for " + pathname)
  
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }

}

exports.route = route
