const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err); // Not Handled
            }

            console.timeEnd('execute');
        });
    }
}

const withTime = new WithTime();

withTime.execute(fs.readFile, ''); // BAD CALL
// withTime.on('error', err => console.log(err))
withTime.execute(fs.readFile, __filename);
process.on('uncaughtException', err => console.log(err))