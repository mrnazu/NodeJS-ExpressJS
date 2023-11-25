// Query String

const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {"Content:Type": "text/plain"});

    res.write(req.url);

    res.end();
}).listen(2024, console.log("started on 2024"));

/*
http://127.0.0.1:2024/nazi
=> /nazi

http://127.0.0.1:2024/nazu
=> /nazu

http://127.0.0.1:2024/summer
=> /summer
 */