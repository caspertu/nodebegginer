var exec = require('child_process').exec;

function start(res) {
    console.log('Request handler start was called.')
    var content = 'empty';

    exec('find /', function(error, stdout, stderr) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(stdout);
        res.end();
    });
}

function upload() {
    console.log('Request handler upload was called.')
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('UPLOAD');
    res.end();
}

exports.start = start;
exports.upload = upload;
