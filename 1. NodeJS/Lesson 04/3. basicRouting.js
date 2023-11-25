const http = require('http');

function successOK (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
};

http.createServer(function (req, res) {
    if (req.url === '/') {
    return successOK(req, res);
}else {
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}    
}).listen(3000);

/*
*/