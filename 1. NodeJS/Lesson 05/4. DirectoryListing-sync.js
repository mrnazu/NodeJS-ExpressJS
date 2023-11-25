const fs = require('fs');
let files;

try{
    files = fs.readdirSync('/usr/local/bin');
    console.log(files.join(" \n"));
} catch(err){
    throw err;
}