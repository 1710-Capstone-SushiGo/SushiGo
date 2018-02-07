// let gameLogic = {}
// let user1 = {pudding: 0, cards: []}
// let users = [user1]

// calculateAmount = (user) => {
// 	let amount = 0;
// 	amount += user.cards.filter((card) => {return card === 'oneMaki'})
// 	amount += user.cards.filter((card) => {return card === 'twoMaki'}) * 2
// 	amount += user.cards.filter((card) => {return card === 'threMaki'}) * 3
// 	return amount
// }

// whoGetsPoints = (arrUserInfo) => {
// 	let sortedInfo = arrUserInfo.sort(function(user1, user2) {
// 		return calculateAmount(user2) - calculateAmount(user1)
// 	})
// 	let sortHigh = sortedInfo.filter((user) => {return calculateAmount(user) === calculateAmount(sortedInfo[0])})
// 	let nextHighIdx = sortHigh.length
// 	let sortNextHigh = sortedInfo.filter((user) => {return calculateAmount(user) === calculateAmount(sortedInfo[nextHighIdx])})
// 	let returnArray = [];
// 	if (sortHigh.length === 1) {
// 		sortHigh[0].makiRollScore = 6
// 		returnArray = sortHigh
// 		sortNextHigh.map((user) => {
// 			user.makiRollScore = 3 / sortNextHigh.length
// 			returnArray.push(user)
// 		})
// 	}
// 	else {
// 		sortHigh.map((user) => {
// 			user.makiRollScore = 6 / sortHigh.length
// 			returnArray.push(user)
// 		})
// 	}
// 	return returnArray
// }

// calculateTempura = (amount) => {return Math.floor(5 * amount / 2)}

// calculateSashimi = (amount) => {return Math.floor(amount * 10 / 3)}

// calculateWasabi = (arrayOfCards) => {
// 	let wasabiAmount = 0;
// 	let score = 0;
// 	for(let i = 0; i < arrayOfCards.length; i++) {
// 		if (arrayOfCards[i] === 'Wasabi') {
// 			wasabiAmount++
// 		}
// 		else if (wasabiAmount > 0 && arrayOfCards[i] === 'Egg') {
// 			score += 3
// 			wasabiAmount--
// 			arrayOfCards.splice(i, 1)
// 			i--;
// 		}
// 		else if (wasabiAmount > 0 && arrayOfCards[i] === 'Salmon') {
// 			score += 6
// 			wasabiAmount--
// 			arrayOfCards.splice(i, 1)
// 			i--;
// 		}
// 		else if (wasabiAmount > 0 && arrayOfCards[i] === 'Squid') {
// 			score += 9
// 			wasabiAmount--
// 			arrayOfCards.splice(i, 1)	
// 			i--;
// 		}
// 	}
// 	return {score, arrayOfCards};
// }

// calculateEgg = (amount) => {return amount * 1};

// calculateSalmon = (amount) => {return amount * 2};

// calculateSquid = (amount) => {return amount * 3};

// calculateDumpling = (amount) => {
// 	let scoring = {
// 		'5': 15,
// 		'4': 10,
// 		'3': 6,
// 		'2': 3,
// 		'1': 1,
// 		'0': 0
// 	}
// 	if (amount > 5) amount === 5
// 	return scoring[amount]
// }

// gameLogic.calculateRound = (users) => {
// 	let wasabiInfo
// 	let makiInfo = whoGetsPoints(users);

// 	users.map((user) => {
// 		score = 0;
// 		makiInfo.map((scoringUser) => {
// 			if (scoringUser.id === user.id) user = scoringUser
// 		})
// 		wasabiInfo = calculateWasabi(user.cards)
// 		score += wasabiInfo.score
// 		user.cards = wasabiInfo.arrayOfCards
// 		score += calculateEgg(user.cards.filter((card) => {return card === 'Egg'}).length)
// 		score += calculateSalmon(user.cards.filter((card) => {return card === 'Salmon'}).length)
// 		score += calculateSquid(user.cards.filter((card) => {return card === 'Squid'}).length)
// 		score += calculateDumpling(user.cards.filter((card) => {return card === 'Dumpling'}).length)
// 		score += calculateSashimi(user.cards.filter((card) => {return card === 'Sashimi'}).length)
// 		score += calculateTempura(user.cards.filter((card) => {return card === 'Tempura'}).length)
// 		user.pudding += calculatePudding(user.cards.filter((card) => {return card === 'Pudding'}).length)
// 		user.score = user.score.push(score)
// 	})
// }

// gameLogic.calculateRound(users);