const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write(`Hello, World (copy in text) 3`);
    res.end();
}).listen(1111, console.log("started on 1111"));