const express = require('express');

const app = express();

app.get('/hello/:name', (req, res) => {
	res.status(200).json({msg: 'hello ' + (req.params.name || 'world')});

}).listen(3000, () =>{
	console.log('Server Up');
});