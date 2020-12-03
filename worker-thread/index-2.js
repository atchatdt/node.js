const { parentPort, workerData } = require('worker_threads');
var CronJob = require("cron").CronJob;
let count = 0
const job = new CronJob({
    cronTime: "* * * * * *",
    onTick: () => {
        // console.log(count++)
        parentPort.postMessage(count++)
    }
})

job.start()
