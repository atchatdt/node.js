const EventEmitter = require('events').EventEmitter

class User extends EventEmitter{
    constructor(){
        super();
    }

    savedb(){
        this.emit('save', 'saved')
    }
}

module.exports = User