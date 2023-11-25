const http = require('http');

var routes = {
    "/": function successOK(req, res){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("<h2>Basic Routing!</h2>");
        res.write("<p>You need to learn routing!</p>");
        res.write('<a href="/learn">Learn!</a>');
        res.end();
    },
    "/learn": (req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write('You are now viewing "/learn" path to learn routing!')
        res.write('<a href="/">Home!</a>');
        res.end();
    }
};

// Now that we've stored 2 routes in an object{}, we can now check for them in our main callback:

http.createServer(function(req, res){

    if (req.url in routes) {
        return routes[req.url](req, res);
    }else{
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.write('<a href="/">Home!</a>')
        res.end(http.STATUS_CODES[404]);
    };
    
}).listen(3001, console.log("Started on 3001"));