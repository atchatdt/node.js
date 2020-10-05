const crypto = require('crypto');

const secret = 'kuro'

const hash = crypto.createHash('sha256',secret)
                    .update('password')
                    .digest('hex')
console.log(hash)

