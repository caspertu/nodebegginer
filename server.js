var http = require('http');
var url = require('url');

function start(route, handle) {
    const port = 8080;
    function onRequest(request, response) {
      var postData = '';
      var pathname = url.parse(request.url).pathname;
      console.log('Request for ' + pathname + ' received.')

      request.setEncoding('utf8');

      request.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
        console.log('Received POST data chunk "' 
          + postDataChunk + '".');
      });

      request.addListener('end', function() {
        console.log('end');
        route(handle, pathname, response, postData);
      });
    }

    http.createServer(onRequest).listen(port);　
    console.log('Server listening on: http://localhost:%s', port);
}

exports.start = start;