const fs = require('fs');

// first of all create a file then del

fs.open("Deleted.txt", "w", function(err, file){
    if (err) throw err;
    console.log("Created!");
});

// unlink() method to delete file!
fs.unlink("Deleted.txt", function(err){
    if(err) throw err;
    console.log("Deleted!");
});