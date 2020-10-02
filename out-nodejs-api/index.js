const cluster = require('cluster');

console.log(cluster.isMaster)

// Is the file being excuted in master mode
if (cluster.isMaster) {
    // Case index.js to be executed *again* but in child mode
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {

    // Im a child. Im going to act like a server and do thing else
    const express = require('express');

    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while ((Date.now() - start) < duration) {}
    }


    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi');
    });

    app.get('/fast',(req,res)=>{
        doWork(5000);
        res.send('Fast');
    })

    app.listen(3000, console.log('App running port 3000'));

}