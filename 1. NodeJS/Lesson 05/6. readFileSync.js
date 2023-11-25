const fs = require('fs');
// Read a string from another file synchronously
let content;
try {
    content = fs.readFileSync('sync.txt', { encoding: 'utf8' });
    console.log(content);
} catch(err) {
    // An error occurred
    console.error(err);
}