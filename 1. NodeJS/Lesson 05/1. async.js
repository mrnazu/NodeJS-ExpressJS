const fs = require('fs');
const path = require('path');

fs.open(path.resolve(__dirname, ".", "newFile.txt"), "w", function(err, file){
    if (err) throw err;
    console.log(`New File Created!`);
});

fs.writeFileSync(path.resolve(__dirname, ".", "newFile.txt"), "I wrote some text in created file before", function(err, con){
    if (err) throw err;
});
