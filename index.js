var server = require('./server');
var router = require('./router');
var reqHandlers = require('./reqHandler');

var handle = {};
handle['/'] = reqHandlers.start;
handle['/start'] = reqHandlers.start;
handle['/upload'] = reqHandlers.upload;

server.start(router.route, handle);