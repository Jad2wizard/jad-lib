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
		let dot = 0
		for (let i = 0; i < v1.length; ++i) dot += Number(v1[i]) * Number(v2[i])

		return dot / v1.length - average(v1) * average(v2)
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
		return cov(v1, v2) / (stdDev(v1) * stdDev(v2))
	} catch (e) {
		return null
	}
}

module.exports = {
	sum,
	average,
	stdDev,
	cov,
	corr,
}
