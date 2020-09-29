const http = require('http');
const {
    fork
} = require('child_process');


const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/compute') {
        const childProcess = fork(__dirname + '/compute.js');
        childProcess.send('start')
        childProcess.on('message', sum => res.end(`Sum is ${sum}`))
    } else {
        res.end('Ok')
    }
});

server.listen(3000, console.log("App running port 3000"));

