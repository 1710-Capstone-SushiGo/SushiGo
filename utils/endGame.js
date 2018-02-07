const whoGetsPudding = require('./cards/pudding')

const selectWinner = allUsers => {
    let newUsers = allUsers.slice();
    let puddingInfo = whoGetsPudding(newUsers)
    let userPudding
    newUsers = newUsers.map(user => {
        userPudding = puddingInfo.filter((userPuddin) => user.id === userPuddin.id)
        if(userPudding.length > 0) user.score.push(userPudding[0])
        return user.totalScore = user.score.reduce(
            (a, b) => a + b)
    })
    newUsers.sort((a, b) => b - a)
    for (let i = 0; i < newUsers.length; i++) {
        newUsers[i].winner = true;
        if (newUsers[i+1] && newUsers[i].totalScore > newUsers[i + 1].totalScore)
            break;
    }
    return newUsers;
}

module.exports = selectWinner;