const calculateDumpling = (amount) => {
	let scoring = {
		'5': 15,
		'4': 10,
		'3': 6,
		'2': 3,
		'1': 1,
		'0': 0
	}
	return amount <= 5 ? scoring[amount] : scoring[5]
}

module.exports = calculateDumpling