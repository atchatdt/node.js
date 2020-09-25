const fs = require('fs')
fs.readFile('./main/data.txt', 'utf8', function (err, data) {
    if (!err) {
        console.log(data)
    } else {
        console.log(err)
    }
})

console.log("hello world 2")