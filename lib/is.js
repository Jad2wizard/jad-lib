let typeofstr = typeof ''
let typeofobj = typeof {}
let typeoffn = typeof function() {}

let instanceStr = function(obj) {
	return obj && obj.instanceString && fn(obj.instanceString)
		? obj.instanceString()
		: null
}

const defined = obj => obj != null // not undefined or null

const string = obj => obj != null && typeof obj == typeofstr

const fn = obj => obj != null && typeof obj === typeoffn

const array = obj =>
	Array.isArray ? Array.isArray(obj) : obj != null && obj instanceof Array

const plainObject = obj =>
	obj != null &&
	typeof obj === typeofobj &&
	!array(obj) &&
	obj.constructor === Object

const object = obj => obj != null && typeof obj === typeofobj

const emptyObj = obj => object(obj) && Object.keys(obj).length === 0

const number = obj => obj != null && typeof obj === typeof 1 && !isNaN(obj)

const integer = obj => number(obj) && Math.floor(obj) === obj

const bool = obj => obj != null && typeof obj === typeof true

const emptyString = obj => {
	try {
		if (obj === undefined || obj === null) {
			// null is empty
			return true
		} else if (obj === '' || obj.match(/^\s+$/)) {
			return true // empty string is empty
		}

		return false // otherwise, we don't know what we've got
	} catch (e) {
		return false
	}
}

const nonemptyString = obj => {
	if (obj && string(obj) && obj !== '' && !obj.match(/^\s+$/)) {
		return true
	}

	return false
}

const promise = obj => object(obj) && fn(obj.then)

module.exports = {
	defined,
	string,
	fn,
	array,
	plainObject,
	object,
	emptyObj,
	number,
	integer,
	bool,
	emptyString,
	nonemptyString,
	promise
}
