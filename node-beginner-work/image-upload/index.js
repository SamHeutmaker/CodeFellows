const formidable = require('formidable');
const http = require('http');
const sys = require('util');

http.createServer(function(request, response) {
	if(request.url == '/upload' && request.method.toLowerCase() == 'post' ){
		var form = new formidable.IncomingForm();
		form.parse(request, function(err, fields, files) {
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.write('Upload Recieved');
			response.end(sys.inspect({fields: fields, files: files}));
		});
		return;
	}

	response.writeHead(200, {'content-type': 'text/html'});
	 response.end(
    '<form action="/upload" enctype="multipart/form-data" '+
    	'method="post">'+
    		'<input type="text" name="title"><br>'+
    		'<input type="file" name="upload" multiple="multiple"><br>'+
    		'<input type="submit" value="Upload">'+
	'</form>'
  );
}).listen(8888);