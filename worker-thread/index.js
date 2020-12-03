const { Worker } = require('worker_threads')

const woker = new Worker(__dirname + '/index-2.js')

woker.on('message', data => console.log(data))
