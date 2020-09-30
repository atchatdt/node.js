const app = require("express")();
const {
    fork
} = require('child_process');

app.get("/", (req, res) => {
    res.send("ok")
})

app.get("/isprime", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let {
        number
    } = req.query
    number = parseInt(number)
    const childProcess = fork(__dirname + "/isprime.js")

    childProcess.on('exit', code => {
        console.log(`Satatus code ${code}`)
    })
    
    childProcess.send({
        number
    })
    childProcess.on("message", message => {
        console.log('Code exit: ' + childProcess.exitCode)
        res.send(message)
    })
    childProcess.on('error', err => res.send(err))

    // process.kill(childProcess.pid)
    // childProcess.kill('')

})

app.listen(3000, () => console.log("Listening on 3000"))