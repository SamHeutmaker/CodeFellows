function route(pathname, handle, response, postData) {
	console.log('About to route path for' + pathname);
if(typeof handle[pathname] === 'function') {
	handle[pathname](response, postData);
} else {
	console.log('No handler for ' + pathname);
	response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("NO PATH FOUND");
    response.end();
 }
}

exports.route = route;