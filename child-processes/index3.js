const {
    spawn
} = require('child_process')

if (process.argv[2] == 'child') {
    console.log("\nI am inside the child\n")
    console.log(process.argv)
} else {
    // let child = spawn(process.execPath, [__filename, 'child'])
    // child.stdout.on('data', function (data) {
    //     console.log('From child ', data.toString())
    // })
    // child.stdout.pipe(process.stdout)
    // console.log(process.execPath, __filename)
    let child = spawn(process.execPath, [__filename, 'child', 'child3'], {
        stdio: 'inherit'
    })
}