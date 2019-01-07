var http = require('http');
console.log('server started on port 3333');
http.createServer(function (req, res) {

  var d = new Date();
  var n = d.toJSON();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(n);
  res.end();
}).listen(3333);
