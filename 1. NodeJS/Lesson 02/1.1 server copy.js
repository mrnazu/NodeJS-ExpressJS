const http = require('http');

http.createServer();

http.createServer(function(req, res){
    res.writeHead('200', {
        "Content-Type": "text/html"
    });
    res.write(`<h3>Hello, World (copy in h3)</h3>`);

    res.end();
}).listen(3001, console.log("started on 3001!"));