var server = require('./server');
var route = require('./router');
var requestHandler = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(route.route, handle);