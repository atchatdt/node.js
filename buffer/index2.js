const encode = Buffer.from('a', 'ascii')
console.log(encode)
const decode = encode.toString('base64')
console.log(decode)