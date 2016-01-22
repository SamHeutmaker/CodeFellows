const http = require('http');
const jsonParser = require(__dirname + '/lib/json_callback');

http.createServer( (req, res) => {
	jsonParser(req, (err, data) => {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(data));
		res.end();
	});
}).listen(3000, () => { console.log('Server Up');});