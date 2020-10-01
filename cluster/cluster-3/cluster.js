const cluster = require('cluster');
const os = require('os');

let count = 100;
if (cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(process.pid)
    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    // Tự động khởi động lại 1 worker mới khi bị giết
    // Right after the fork loop within the isMaster=true block
    cluster.on('exit', (worker, code, signal) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} crashed. ` +
                'Starting a new worker...');
            cluster.fork();
        }
    });

    const restartWorker = (workerIndex) => {
        const worker = workers[workerIndex];
        if (!worker) return;

        worker.on('exit', () => {
            if (!worker.exitedAfterDisconnect) return;
            console.log(`Exited process ${worker.process.pid}`);

            cluster.fork().on('listening', () => {
                restartWorker(workerIndex + 1);
            });
        });

        worker.disconnect();
    };

    setInterval(updateCount, 5000)
} else {
    console.log(`Not master: ${process.pid}`)
    require('./server');
}


function updateCount() {
    console.log("------------------------------------------\n")
    Object.values(cluster.workers).forEach(worker => {
        worker.send(JSON.stringify({
            count: count++,
            id: worker.process.pid
        }))
    })
}