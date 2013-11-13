// Make sure that we have everything we need!
var express = require('express');
var connect = require('connect');
var fs = require('fs');
var qs = require('querystring');

// Set Up Express Application!
var app = express();
app.use(connect.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: "alphaalpha"}));

// What to get...

app.get('*', function (req, res,next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.send('Hello');
	next();
});

app.get('/', function(req, res){
  var path = '/';
  res.send('this is the homepage');
  res.end('</body></html>');
});

app.listen(3000);
console.log('Listening on port 3000');
