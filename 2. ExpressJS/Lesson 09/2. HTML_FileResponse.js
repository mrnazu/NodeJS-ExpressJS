const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.get('/', function(req, res){
    filePath = path.join(__dirname, "./views", "index.html");
    res.sendFile(filePath);
});

app.listen(port);