let makiRoll = {};

const calculateAmount = (user) => {
	return user.oneMakiRollAmount + user.twoMakiRollAmount * 2 + user.threeMakiRollAmount * 3
}

makiRoll.whoGetsPoints = (arrUserInfo) => {
	let sortedInfo = arrUserInfo.sort(function(user1, user2) {
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
			user.makiRollScore = 3 / sortNextHigh.length
			returnArray.push(user)
		})
	}
	else {
		sortHigh.map((user) => {
			user.makiRollScore = 6 / sortHigh.length
			returnArray.push(user)
		})
	}
	return returnArray
}

module.exports = makiRoll