// server.js
const http = require('http');
const pid = process.pid;
let obj = {}
http.createServer((req, res) => {
  for (let i = 0; i < 1e7; i++); // simulate CPU work
  res.end(`Handled by process ${obj}`);
}).listen(3000, () => {
  console.log(`Started process ${pid}`);
});

process.on("message", msg => {
  console.log(JSON.parse(msg))
  obj = msg
})

// setTimeout(() => {
//   process.exit(1)
// }, 10000)