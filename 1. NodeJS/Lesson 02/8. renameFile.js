const fs = require('fs');

fs.open("something.txt", "w", function(err){
    if(err) throw err;
    console.log("File Created! \n Title: something.txt");
});

fs.rename("something.txt", "Renamed.txt", function(err){
    if(err) throw err;
    console.log("File Renamed! \n Old Title: something.txt \n New Title: Renamed.txt");
})