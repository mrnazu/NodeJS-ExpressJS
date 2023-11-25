const express = require('express'); // Imports the express module
const ejs = require('ejs'); // Imports the ejs module
const app = express(); // Creates an instance of the express module

const PORT = 3000; // Randomly chosen port

app.set('view engine','ejs'); // Sets ejs as the View Engine / Template Engine
app.set('views','/home/nazu/app/NodeJS & ExpressJS - Crash Course/2. ExpressJS/Lesson 09/views'); // Sets the directory where all the views (.ejs files) are stored.

// Creates a Root Route
app.get('/', function(req, res){
    res.render('index', {Ptag: "You rendered html file using NodeJS, ExpressJS and EJS Template. Great!", title: "Lesson 09"}); // renders the index.ejs and returns as a response. The render function optionally takes the data to pass to the view.
});

// Starts the Express server with a callback
app.listen(PORT, function(err){
    if (!err){
        console.log('Server is running at port', PORT);
    }else{
        console.log(JSON.stringify(err));
    }
});