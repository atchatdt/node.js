process.on('message', ({
    hello
}) => {
    console.log("Hello " + hello)
    process.exit()
})

process.send({
    qq: "okok",
    id: process.pid
})