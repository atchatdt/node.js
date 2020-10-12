const events = require('events');
const { Worker } = require('worker_threads')

const EventEmitter = new events.EventEmitter()

EventEmitter.on('gb', data=> console.log(data))

EventEmitter.on('hi', (data) => {
    console.log(data)
    const worker = new Worker(__dirname + '/fork.js')
    worker.on('exit', ()=> console.log('okokokok'))
})


EventEmitter.emit('hi', 2)
EventEmitter.emit('gb', 'goodbye')