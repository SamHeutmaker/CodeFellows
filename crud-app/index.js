const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');

const bearsRouter = require(__dirname + '/routes');

app.use('/api', bearsRouter);

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
