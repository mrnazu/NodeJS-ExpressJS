// Hello World command line

// Store the first argument as username.
var userName = process.argv[2];

// Check if the username hasn't been provided by a user.
if (!userName){
    var scriptName = process.argv[1].split(require('path').sep).pop(); 

    /* 
    1. process.argv[1] = "/home/nazu/app/NodeJS & ExpressJS - Crash Course/1. NodeJS/Lesson 02"

    2. Splitting a string into substrings using the specified separator and return them as an array.
    => ["node", "nazu/app/..", "2. hello CLI.js"]
    (require is just for importing path module!)

    3. sep = The platform-specific file separator. '\' or '/'.

    4. pop() = Removes the last element from an array and returns it.
    */

    // Give the user an example on how to use the app.
    console.error(`Missing argument! Example: ${scriptName} YOUR_NAME`);

    process.exit(1);
};
// Print the message to the console.
console.log('Hello %s!', userName);
