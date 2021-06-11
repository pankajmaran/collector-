var http = require('http');

http.createServer(function (req, res) {
var text_ready = "This is a content of a txt file."


res.writeHead(200, {'Content-Type': 'application/force-download','Content-disposition':'attachment; filename=file.txt'});

res.end( text_ready );
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');