const dns = require('dns')
dns.lookup('abc.com', (err, address, family) => {
    if(!err){
        console.log(`Address: ${address}, IP: ${family}`)
    }else{
        console.log(err)
    }
})