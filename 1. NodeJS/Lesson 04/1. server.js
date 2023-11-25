const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write("Server Created!");

    res.end();
}).listen(3000, console.log("Started Listening on Port 3000"));