// const process = require('process')

process.on('beforeExit', code =>{
    console.log(code)
})

process.abort()