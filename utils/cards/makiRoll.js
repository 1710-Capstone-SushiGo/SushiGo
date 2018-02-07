const calculateAmount = (user) => {
	let oneMaki = user.keep.filter((card) => card === 'makiOne').length
	let twoMaki = user.keep.filter((card) => card === 'makiTwo').length
	let threeMaki = user.keep.filter((card) => card === 'makiThree').length
	return oneMaki + twoMaki * 2 + threeMaki * 3
}

const whoGetsMaki = (arrUserInfo) => {
	console.log('------whoGetsMaki', arrUserInfo)
	let sortedInfo = arrUserInfo.sort(function(user1, user2) {
		console.log('----USERS', user1, user2)
		return calculateAmount(user2) - calculateAmount(user1)
	})
	let sortHigh = sortedInfo.filter((user) => {return calculateAmount(user) === calculateAmount(sortedInfo[0])})
	let nextHighIdx = sortHigh.length
	let sortNextHigh = sortedInfo.filter((user) => {return calculateAmount(user) === calculateAmount(sortedInfo[nextHighIdx])})
	let returnArray = [];
	if (sortHigh.length === 1) {
		sortHigh[0].makiRollScore = 6
		returnArray = sortHigh
		sortNextHigh.map((user) => {
			user.makiRollScore = Math.floor(3 / sortNextHigh.length)
			returnArray.push(user)
		})
	}
	else {
		sortHigh.map((user) => {
			user.makiRollScore = Math.floor(6 / sortHigh.length)
			returnArray.push(user)
		})
	}
	return returnArray
}

module.exports = whoGetsMaki