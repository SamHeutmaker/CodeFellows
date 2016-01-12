const querystring = require('querystring');
const fs = require('fs');



function start(response, postData) {
  console.log('Request handler for start was called');

  var body = 
  '<html>'+
    '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+
      'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
      '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
      '</form>'+
    '</body>'+
 '</html>';

  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.write(body);
  response.end();

};

function upload(response, postData) {
  console.log('Request handler for upload was called');

  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.write('Data received: ' + querystring.parse(postData).text);
  response.end();
};

function show(response){
  console.log('Show called');
  response.writeHead(200, {'content-type': 'image/jpg'});
  fs.createReadStream('test.jpg').pipe(response);
}



module.exports = {
  start: start,
  upload: upload,
  show: show
};