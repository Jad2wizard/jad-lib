
const debounce = (func, delay) => {
    let timer = null
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func(...args)
            timer = null
        }, delay)
    }
}

const throttle = (func, delay) => {
    let timer = null

    //use prevArgs and endTimer to ensure the last call of func will be invoke by endTimer
    let prevArgs = null
    let endTimer = null

    return function(...args){
        prevArgs = args
        endTimer && clearTimeout(endTimer)
        endTimer = setTimeout(() => {
            func(...prevArgs)
            endTimer = null
        }, delay)

        if(!timer){
            func(...args)
            timer = setTimeout(() => {
                timer = null
            }, delay)
        }
    }
}

module.exports = {
    debounce,
    throttle
}