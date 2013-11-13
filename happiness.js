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

// What should the user get?




app.get('*', routeRoot);


function routeRoot(req, res) {
  var path = '/';
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("");
  
  res.end('</body></html>');
}

/*
app.get('/', function(req, res){
  var path = '/';
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Print out the  Homepage!
  var array = fs.readFileSync(__dirname + '/system/content/blocks/header.html').toString().split("\n");
  for(i in array) {
      res.write(array[i]);
  }

  // Print out the Main Menu!
  var array = fs.readFileSync(__dirname + '/system/content/blocks/mainmenu.html').toString().split("<!--");
  for(i in array) {
    res.write(array[i]);
    console.log(array[i]);
  }

  // Print out the content!
  var array = fs.readFileSync(__dirname + '/system/content/pages/homepage.html').toString().split("\n");
  for(i in array) {
    res.write(array[i]);
  }
  res.end('</body></html>');
});
*/
app.listen(3000);
console.log('Listening on port 3000');
