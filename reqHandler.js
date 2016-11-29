// function start() {
//   console.log('Request Handler *start* was called');
//   function sleep(milliSeconds) {
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }
//   sleep(10000);
//   return 'Hello Start';
// }
// function upload() {
//   console.log('Request Handler *upload* was called');
//   return 'Hello Upload';
// }
//
// exports.start = start;
// exports.upload = upload;

// var exec = require('child_process').exec;
var querystring = require('querystring');

function start(res, postData) {
  console.log('Request Handler *START* was called');

  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" '+
  'content="text/html; charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" enctype="multipart/form-data" '+
  'method="post">'+
  '<input type="file" name="upload" multiple="multiple">'+
  '<input type="submit" value="Upload file" />'+
  '</form>'+
  '</body>'+
  '</html>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(body);
  res.end();
}

function upload(res, postData) {
  console.log('Request Handler *UPLOAD* was called');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('You have sent the text: ' + querystring.parse(postData).text);
  res.end();

}

exports.start = start;
exports.upload = upload;