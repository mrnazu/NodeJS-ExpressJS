const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({extended: false}));


app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name:</label><input type="text" name="username"><button>submit</button></form>'
  );
  res.end();
});

app.post('/store-user', function(req, res){
    const reqName = req.body.username;

    console.log(reqName);

    res.send("<h1>Successfully Username Stored!</h1>");
})
app.listen(3000);
