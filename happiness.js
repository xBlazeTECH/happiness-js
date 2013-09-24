// Define Requires
var fs = require('fs');
var http = require('http');
var qs = require('querystring');
var request = require('request');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/content');

// Configuration Stuff
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});



// Settings:
var listenIP = '127.0.0.1';
var listenPort = 2232;
/*
var pageTitle = out.title;
var pageHeader = out.header;
var pageContent = out.content;
*/

http.createServer(function (req, res) {
   var request = __dirname + '/node/page/homepage.json';
   fs.readFile(request, 'utf8', function (err, data) {
      if (err) {
         console.log('**ERROR: There was an error while loading homepage content!\n' + err);
         return;
      }
      info = null;
      info = JSON.parse(data);
      console.log('Homepage Loaded Sucessfully with');
      console.dir(info);
      processNode();
   });
  function processNode() {
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write('<html><head><title>' + info.data + '</title></head>');
     res.write('<body>');
     res.write('<h1>' + info.header + '</h1>');
     res.write(info.content);
     res.end('</body></html>');
  }
}).listen(listenPort, listenIP);
console.log('Server running at http://' + listenIP + ':' + listenPort + '/');
