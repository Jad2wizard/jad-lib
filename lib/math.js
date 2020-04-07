/**
 *
 * @param {Array} vector
 */
const sum = vector => {
	try {
		return vector.reduce((m, n) => m + n, 0)
	} catch (e) {
		return null
	}
}

/**
 *
 * @param {Array} vector
 */
const average = vector => {
	try {
		return sum(vector) / vector.length
	} catch (e) {
		return null
	}
}

/**
 * 标准差
 * @param {Array} vector
 */
const stdDev = vector => {
	try {
		const len = vector.length
		const avg = average(vector)
		let sumOfDev = 0

		for (let n of vector) sumOfDev += (n - avg) ** 2

		return Math.pow(sumOfDev / (len - 1), 0.5)
	} catch (e) {
		return null
	}
}

/**
 * 协方差
 * @param {Array} v1
 * @param {Array} v2
 */
const cov = (v1, v2) => {
	try {
		if (v1.length !== v2.length) return null

		let res = 0
		const len = v1.length
		const avg1 = average(v1)
		const avg2 = average(v2)
		for (let i = 0; i < len; ++i) {
			res += (Number(v1[i]) - avg1) * (Number(v2[i]) - avg2)
		}

		return res / (len - 1)
	} catch (e) {
		return null
	}
}

/**
 * Pearson 相关系数
 * @param {Array} v1
 * @param {Array} v2
 */
const corr = (v1, v2) => {
	try {
		const res = cov(v1, v2) / (stdDev(v1) * stdDev(v2))
		return res
	} catch (e) {
		return null
	}
}

/**
 * 去掉一个数字不为0的digit个数之后的部分
 * @param {number} value
 * @param {number} digit
 */
const simplifyNumber = (value, digit = 2) => {
	value = +value
	digit = +digit
	if (value !== value) return value
	if (value > 1) return +value.toFixed(digit)
	const str = value.toString()
	let i = 0
	for (; i < str.length; ++i) {
		if (str[i] !== '0' && str[i] !== '.') break
	}

	return +value.toFixed(i + digit - 2)
}

/**
 * 四舍五入 round(1.555, -2) => 1.56
 * @param {Number} value
 * @param {Number} exp
 */
const round = (value, exp) => {
	// If the exp is undefined or zero...
	if (typeof exp === 'undefined' || +exp === 0) {
		return Math.round(value)
	}
	value = +value
	exp = +exp
	// If the value is not a number or the exp is not an integer...
	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
		return NaN
	}
	// Shift
	value = value.toString().split('e')
	value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)))
	// Shift back
	value = value.toString().split('e')
	return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp))
}

module.exports = {
	sum,
	average,
	stdDev,
	cov,
	corr,
	round,
	simplifyNumber,
}
