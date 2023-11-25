const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./members')
const app = express();


app.use(logger);


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// views folder
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// serving static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Route
app.use('/api/members', require('./router/Members'));


// Home Page
app.get('/', function(req, res){
    res.render(index, {
        title: "Member App",
        members
    });
});


const PORT = proccess.env.PORT || 5000
app.listen(PORT, () => console.log(`server started on ${PORT}`));

