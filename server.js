var http = require('http');
var url = require('url');

function start(route, handle) {
  const port = 8080;
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.')

    route(handle, pathname, res);
  }

  http.createServer(onRequest).listen(port);　
  console.log('Server listening on: http://localhost:%s', port);
}

exports.start = start;