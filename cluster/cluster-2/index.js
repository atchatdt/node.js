const cluster = require('cluster')
const http = require('http')
const {
    cpus
} = require('os')
const totalCUPs = cpus().length;
if (cluster.isMaster) {
    console.log('Master ', process.pid)
    for (let i = 0; i < totalCUPs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log('Kill ', worker.process.pid)
    })
} else {
    console.log('Not master ', process.pid)
    http.createServer((req, res) => {
        const mess = `Worker: ${process.pid}`;
        console.log(mess)
        res.end(mess)
    }).listen(3000, () => console.log('App running port 3000'))
}