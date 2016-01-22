const express = require('express');
const app = express();

const helloRouter = express.Router();
helloRouter.get('/hello', (req, res) =>{

})

helloRouter.get('/hello/:name', (req, res) => {
	res.status(200).json({msg: 'hello ' + req.params.name});
});

app.use('/api', helloRouter);