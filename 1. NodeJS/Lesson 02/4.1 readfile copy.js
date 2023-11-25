const fs = require('fs');
const http = require('http');

http.createServer(function(req, res){
    fs.readFile("5.1 demoFile.html", function(err, data){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(data);

        res.end();
    });
}).listen(2027)