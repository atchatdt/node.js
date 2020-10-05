const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

let myEmitter = new MyEmitter();

function ListenForData(...data){
    console.log(data)
}


myEmitter.on('data', ListenForData)
myEmitter.emit('data', "Hello world", "kuro")