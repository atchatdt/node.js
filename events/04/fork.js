const events = require('events');

const EventEmitter = new events.EventEmitter()
console.log('ok')
EventEmitter.emit('gb', 'goodbye')