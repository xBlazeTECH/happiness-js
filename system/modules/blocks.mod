exports.write = function (blockname) {
  var array = fs.readFileSync(__dirname + '/system/content/blocks/' + blockname + '.html').toString().split("\n");
  for(i in array) {
      res.write(array[i]);
  }
};
