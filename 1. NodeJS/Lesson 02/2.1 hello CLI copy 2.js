const path = require('path');

var userData = process.argv[2];

if (!userData){
    scriptPath = process.argv[1].split(path.sep).pop();
    console.error(`You need to pass the correct username, Example: ${scriptPath} Your_Name`);

    process.exit();
}
console.log(`Hello, ${userData} Wassup!`);


/*In this example first we imported the path module, then we done the some shit like before! */