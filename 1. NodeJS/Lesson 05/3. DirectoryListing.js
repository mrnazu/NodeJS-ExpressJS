const fs = require('fs');
// Read the contents of the directory /usr/local/bin asynchronously.
// The callback will be invoked once the operation has either completed
// or failed.

fs.readdir('/usr/local/bin', function(err, files){
    if (err) throw err;
    console.log(files.join(' \n'));})