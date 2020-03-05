
const num2Chinese = require('./lib/num2Chinese')
const {rmdirSync, countFiles} = require('./lib/node')
const {debounce, throttle} = require('./lib/utils')

module.exports = {
    num2Chinese,
    debounce,
    throttle,
    rmdirSync,
    countFiles
}