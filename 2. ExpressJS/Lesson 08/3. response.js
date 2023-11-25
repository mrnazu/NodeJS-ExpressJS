const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write("<h1>Hello, This is heading 2</h2>")
    res.write("<p>And this is simple html Paragraph</p>")
    res.end();
});

const port = 3000;
app.listen(port);