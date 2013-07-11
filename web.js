var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer();

fs.readFileSync('index.html', function(err, data) {
 if (err) throw err;
 buffer.write(data);
}); 

var output = buffer.toString();

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
