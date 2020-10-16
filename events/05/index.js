const User = require('./user')

// const user = new User()

// User.on('save', data => console.log(data))

// user.savedb()


const user = new User()

user.on('save', data => console.log(data))
user.savedb()