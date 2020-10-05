const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('one', data => console.log(data))

emitter.emit('one', {
    data: 'Hello world'
})