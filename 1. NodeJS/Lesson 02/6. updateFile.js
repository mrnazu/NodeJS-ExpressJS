const fs = require('fs');

fs.appendFile("newFile2", "Updated using appendFile() Method!", function(err){
    if(err) throw err;
    console.log('Updated!');
});

fs.writeFile("newFile3", "Replaced using writeFile() Method!", function(err){
    if(err) throw err;
    console.log("Replaced!");
});
