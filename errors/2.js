const fs = require('fs');

function errorFirstCallback(err, data) {
    if (err) {
        console.error('There was an error', err);
        return;
    }
    console.log(data);
}

fs.readFile('./data.txt', errorFirstCallback);
fs.readFile('/some/file/that/does-exist', errorFirstCallback);
