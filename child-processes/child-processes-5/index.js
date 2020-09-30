const {
    fork
} = require('child_process')


const cp = fork(__dirname + '/index2.js');
console.log(cp)
cp.send({
    hello: "world"
})

cp.on("message", ({
    qq,
    id
}) => {
    console.log(qq)
})