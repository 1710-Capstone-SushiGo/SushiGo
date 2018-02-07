const selectWinner = allUsers => {
    let newUsers = allUsers.slice();
    newUsers.forEach(user =>
        user.totalScore = user.scores.reduce(
            (a, b) => a + b));
    newUsers.sort((a, b) => b - a)
    for (let i = 0; i < newUsers.length; i++) {
        newUsers[i].winner = true;
        if (newUsers[i+1] && newUsers[i].totalScore > newUsers[i + 1].totalScore)
            break;
    }
    return newUsers;
}

module.exports = selectWinner;