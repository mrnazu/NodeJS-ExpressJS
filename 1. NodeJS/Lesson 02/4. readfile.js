const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile("5.1 demoFile.html", function(err, data){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(data);

        return res.end();
    });
}).listen(2026);