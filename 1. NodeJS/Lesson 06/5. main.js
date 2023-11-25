// We can include the other files we've defined by using the `require()` method
var world = require('./1. hello-world');
var venus = require('./2. hello-venus');
var jupiter = require('./3. hello-jupiter');
var mars = require('./4. hello-mars');
var index = require('./hello/1. index');

// Because we assigned our function to the entire `module.exports` object, we can use it directly
world('World'); // outputs "Hello, World!"
venus.hello('Samuel'); // outputs "Hey, Samuel Venus says hello!"
jupiter.hello('Samuel'); // outputs "Hey, Samuel Jupiter says hello!""
jupiter.bye("Samuel"); // outputs "Hey, Samuel Goodbye!"
mars.hello('Samuel'); // outputs "Hey, Samuel Mars says hello!"
index(); // outputs "Done!"