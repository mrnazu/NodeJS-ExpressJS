const fs = require('fs');

// appendFile() Method
fs.appendFile("newFile.txt", "File created Using appendFile() method!", function(err){
    if (err) throw err;
    console.log(`Saved! Using appendFile()`);
});

// open() Method
fs.open("newFile2", "w", function(err, file){
    if (err) throw err;
    console.log(`Saved! Using open()`);
});

// writeFile() Method
fs.writeFile("newFile3", "File created using writeFile() method!", function(err){
    if(err) throw err;
    console.log(`Saved! Using writeFile()`);
});