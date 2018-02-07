const calculateWasabi = (arrayOfCards) => {
	let wasabiAmount = 0;
	let score = 0;
	for(let i = 0; i < arrayOfCards.length; i++) {
		if (arrayOfCards[i] === 'wasabi') {
			wasabiAmount++
		}
		else if (wasabiAmount > 0 && arrayOfCards[i] === 'egg') {
			score += 3
			wasabiAmount--
			arrayOfCards.splice(i, 1)
			i--;
		}
		else if (wasabiAmount > 0 && arrayOfCards[i] === 'salmon') {
			score += 6
			wasabiAmount--
			arrayOfCards.splice(i, 1)
			i--;
		}
		else if (wasabiAmount > 0 && arrayOfCards[i] === 'squid') {
			score += 9
			wasabiAmount--
			arrayOfCards.splice(i, 1)	
			i--;
		}
	}
	return {score, arrayOfCards};
}

module.exports = calculateWasabi