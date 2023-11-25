const http = require('http');

http.createServer(function(req, res){
    res.write("OK!")

    res.end();
}).listen(3000)