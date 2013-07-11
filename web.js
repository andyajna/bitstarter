var express = require('express');
var fs = require('fs'), filename = "index.html";

var app = express.createServer(express.logger());
var buffer = new Buffer(256);

fs.readFileSync(filename, 'utf-8', function(err, data) {
 if (err) throw err;
 buffer.write(data, 'utf-8');
}); 

var output = buffer.toString('utf-8', 0, buffer.length);

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
