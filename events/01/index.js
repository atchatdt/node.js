const EventEmitter = require('events')
const emitter = require('./user')
const User =require('./user')

const user = new User()

user.on('registed', (data)=>console.log(data))

user.register("kuro", 22)
user.printInfo()
