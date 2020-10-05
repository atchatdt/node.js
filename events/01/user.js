const EventEmitter = require('events')
const emitter = new EventEmitter();

class User extends EventEmitter {
    constructor(name = '', age = '') {
        super()
        this.name = name
        this.age = age

    }
    register(name, age) {
        this.name = name
        this.age = age
        this.emit('registed', {
            name,
            age
        })
    }

    setName(name) {
        this.nane = name
    }
    setAge(age) {
        this.age = age
    }

    printInfo() {
        console.log(`Name: ${this.name} \nAge: ${this.age}`)
    }
}


module.exports = User