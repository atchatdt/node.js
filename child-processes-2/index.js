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
    const childProcess = fork("./child-processes-2/isprime.js")
    childProcess.send({
        number
    })
    childProcess.on("message", message => res.send(message))
    // const jsonResponse = isPrime(number)
    // res.send(jsonResponse)
})

app.listen(3000, () => console.log("Listening on 3000"))