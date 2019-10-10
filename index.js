const num2Chinese = require('./lib/num2Chinese')
const {rmdirSync} = require('./lib/utils')

console.log(num2Chinese(123))
module.exports = {
    num2Chinese,
    rmdirSync
}