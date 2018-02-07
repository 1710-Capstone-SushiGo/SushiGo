const whoGetsPudding = (arrUserInfo) => {
	let sortedUserInfo = arrUserInfo.sort(function(user1, user2) {
		return user2.pudding - user1.pudding;
	})
	let sortHigh = sortedUserInfo.filter((user) => {return user.pudding === sortedUserInfo[0].pudding})
	let sortLow = sortedUserInfo.filter((user) => {return user.pudding === sortedUserInfo[sortedUserInfo.length - 1].pudding})
	let returnUsers = [];
	sortHigh.map((user) => {
		user.puddingScore = Math.floor(6 / sortHigh.length)
		returnUsers.push(user)
	})
	sortLow.map((user) => {
		user.puddingScore = Math.floor(-6 / sortLow.length)
		returnUsers.push(user)
	})
	return returnUsers
}


module.exports = whoGetsPudding