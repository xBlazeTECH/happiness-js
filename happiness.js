// Settings:
var listenIP = '127.0.0.1';
var listenPort = 80;
var pageTitle = 'Page Title';


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><head><title>' + pageTitle + '</title></head>');
  res.write('<body>');
  res.write('<h1>' + pageTitle + '</h1>');
  res.write('<p>What can I do with Node.js?</p>\n');
  res.end('</body></html>');
}).listen(listenPort, listenIP);
console.log('Server running at http://' + listenIP + ':' + listenPort + '/');
