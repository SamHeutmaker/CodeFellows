const fs = require('fs');

var readFile = (filename, callback) => {
	var cb = callback || function() {};
	return new Promise((resolve, reject) => {
		fs.readFile(filename, (err, data) => {
			if (err) {
				reject(err);
				return cb(err);
			}

			resolve(data);
			return cb(err, data);
		});
	});
}

var filePromise = readFile('one.txt', function(err, data) {
	console.log('console.log ' + data.toString());
});

filePromise.then( (data) => {
	console.log(data.toString());
});

filePromise.then( (data) => {
	console.log(data.toString());
});

filePromise.catch( (errData) => {
	console.log(errData);
});
