const express = require('../../node_modules/express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');

const app = express();
const port = process.env.PORT || 5000

connectDb();
// middleware
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);


app.listen(port, function() {
    console.log(`Started on ${port}`);
});