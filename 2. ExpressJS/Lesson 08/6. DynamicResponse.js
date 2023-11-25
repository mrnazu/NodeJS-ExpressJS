const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name:</label><input type="text" name="username"><button>submit</button></form>'
  );
  res.end();
});

app.post("/store-user", function (req, res) {
  const reqName = req.body.username;

  const filePath = path.join(__dirname, "./data", "user.json");

  const fileData = fs.readFileSync(filePath);

  const sending = JSON.parse(fileData);

  sending.push(reqName);

  fs.writeFileSync(filePath, JSON.stringify(sending));

  res.send("<h1>Successfully Username Stored!</h1>");
});

app.get('/users', function(req, res){
    const filePath = path.join(__dirname, "./data", "user.json");

    const fileData = fs.readFileSync(filePath);
    const sending = JSON.parse(fileData);

    let responseData = '<ul>';

    for (const user of sending){
        responseData += '<li>' + user + '</li>';
    };

    responseData += '</ul>';

    res.send(responseData);
})

app.listen(3000);
