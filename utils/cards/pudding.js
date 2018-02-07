whoGetsPudding = (arrUserInfo) => {
	let sortedUserInfo = arrUserInfo.sort(function(user1, user2) {
		return user2.pudding - user1.pudding;
	})
	let sortHigh = sortedUserInfo.filter((user) => {return user.pudding === sortedUserInfo[0].pudding})
	let sortLow = sortedUserInfo.filter((user) => {return user.pudding === sortedUserInfo[sortedUserInfo.length - 1].pudding})
	let returnArr = [];
	sortHigh.map((user) => {
		user.puddingScore = Math.floor(6 / sortHigh.length)
		returnArr.push(user)
	})
	sortLow.map((user) => {
		user.puddingScore = Math.floor(-6 / sortLow.length)
		returnArr.push(user)
	})
	return returnArr
}


module.exports = whoGetsPudding