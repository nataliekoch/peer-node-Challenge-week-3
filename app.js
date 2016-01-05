var http = require('http');

var convertRandom = require('./convertRandom');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(convertRandom.domAppend());
    response.write(convertRandom.finalUsd());
    response.end();
}).listen(3000);

console.log("Listening on port 3000!");
