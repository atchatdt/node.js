const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200)
    
    res.end(`Hello world: ${process.pid}`)
}).listen(3000, ()=> console.log(`App running port 3000 & process:${process.pid}`))