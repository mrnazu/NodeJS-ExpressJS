// "hello/1. index.js"
// "hello/2. main.js"

// We can include the other files we've defined by using the `require()` method
var index = require('./1. index');

// Because we assigned our function to the entire `module.exports` object, we
// can use it directly
index(); // outputs "Done!"