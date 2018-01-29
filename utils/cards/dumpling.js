let dumpling = {}

dumpling.calculateDumpling = (amount) => {
	switch(amount) {
		case 5:
			return 15;
		case 4:
			return 10;
		case 3:
			return 6;
		case 2:
			return 3;
		case 1:
			return 1;
		default:
			return 0;
	}
}

module.exports = dumpling