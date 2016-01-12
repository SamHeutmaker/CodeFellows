var http = require('http');
var url = require('url');


var start = function(route, handle) {

  function onRequest(request, response) {
  	var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + " received");

    request.setEncoding('utf8');

    request.addListener('data', function(chunk) {
    	postData += chunk;
    	console.log("received chunk" + chunk);
    });

    request.addListener('end', function(){
    	route(pathname, handle, response, postData);
    });
    
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server Has Started');

}

exports.start = start;