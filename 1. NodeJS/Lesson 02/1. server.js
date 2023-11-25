// import the http module
const http = require('http');

// create http server
http.createServer();

// Tells the server what port to be on
const port = 2023; 

// Tell the browser everything is OK (Status code 200), and the data is in html
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    // Write the announced text to the body of the page
    res.write("<h1>Hello, World!</h1>");

    // Tell the server that all of the response headers and body have been sent
    res.end();
}).listen(port, console.log(`Started on ${port}!`)); // started listening



