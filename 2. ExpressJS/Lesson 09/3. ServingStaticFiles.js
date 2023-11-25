const express = require('express');
const path = require('path')

const app = express();

const port = 3000

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
    const filePath = path.join(__dirname, "./views", "staticFile.html");
    res.sendFile(filePath);
});

app.listen(port);