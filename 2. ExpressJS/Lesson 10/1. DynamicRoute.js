const express = require('express');
const path = require('path');
const ejs = require('ejs');
const { render } = require('ejs');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('home.ejs', {homeTitle: "Home Page"});
});

app.get('/about', function(req, res){
    res.render('about.ejs', {aboutTitle: "About Page"});
});

app.get('/project', function(req, res){
    res.render('project.ejs', {projectTitle: "Project Page"});
});


app.listen(3000, console.log("started on 3000!"));