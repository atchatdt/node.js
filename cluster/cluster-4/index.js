const cluster = require('cluster');
const http = require('http');
const numCPUS = require('os').cpus().length

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`)
    for (let i = 0; i < numCPUS; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died ( exit)`)
        console.log(`Signal: ${signal}`)
    })
    cluster.on('disconnect', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} disconnect`)
        console.log(`Signal: ${signal}`)
    })

} else {

    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello world: ${process.pid}`)
    }).listen(3000)
    console.log(`Worker ${process.pid} start`)
}