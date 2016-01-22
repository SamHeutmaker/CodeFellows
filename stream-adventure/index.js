const through = require('through2');

var stream = through(write, end);

function write ( buffer, encoding, next ) {
	this.push(buffer.toUpperCase());
	next();
}

function end ()