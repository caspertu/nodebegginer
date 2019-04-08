var http = require('http');
var url = require('url');

function start(route, handle) {
  const port = 8080;
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.')

    var content = route(handle, pathname);
    
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(content);
    res.end();
  }

  http.createServer(onRequest).listen(port);　
  console.log('Server listening on: http://localhost:%s', port);
}

exports.start = start;