// Dùng này tương tác với file rất là lợi
const path = require('path')

console.log(__filename)
console.log(path.basename(__filename))
console.log(path.extname('shop.component.jsx'))