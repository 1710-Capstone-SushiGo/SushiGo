const calculateScore;//will be imported from game logic
const pushScore = allUsers => {
    let copyUsers = allUsers.slice();
    let score;
    copyUsers.forEach(ele => {
        score = calculateSore(ele.keeps);
        ele.scores.push(score);
    });
    return copyUsers;
};

module.exports = pushScore;