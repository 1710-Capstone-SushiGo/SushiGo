const selectWinner = allUsers => {
    newState = allUsers.slice();
    newState.forEach(ele =>
        ele.totalScore = ele.scores.reduce(
            (a, b) => a + b));
    newState.sort((a, b) => a - b).reverse();
    for (let i = 0; i < newState.length; i++) {
        newState[i].winner = true;
        if (newState[i].totalScore > newState[i + 1].totalScore)
            break;
    }
    return newState;
}

module.exports = selectWinner;