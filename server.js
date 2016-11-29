// INITIAL SETUP

// var http = require('http');
//
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }).listen(8888);

// REFACTOR WITH ASYNC

// var http = require('http');
//
// function onRequest(req, res){
//   console.log('Request Received');
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }
//
// http.createServer(onRequest).listen(8888);
//
// console.log('The Server has Started');

//  CREATING OWN VARIABLE FOR MODULE

// var internet = require('http');
//
// function onRequest(req, res) {
//   console.log('Request Received');
//   res.writeHead(200,{'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }
//
// internet.createServer(onRequest).listen(8888);
//
// console.log('The Server has started');

// START FUNCTION FOR HTTP MODULE

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    var postData = '';
    var pathname = url.parse(req.url).pathname;
    console.log('Request For ' + pathname + 'Received');

    req.setEncoding('utf8');

    req.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('Received POST data chunk ' + postDataChunk + '.');
    });
    req.addListener('end', function() {
      route(handle, pathname, res, postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}
exports.start = start;
