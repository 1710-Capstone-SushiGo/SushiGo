const whoGetsMaki = require('./cards/makiRoll')
const calculateScore = require('./gameLogic').calculateRoundScore
const generateHand = require('./gameLogic').generateHand

const updateUsersObject = allUsers => {
    let copyUsers = allUsers.slice();
    let score;
    let makiUser;
    let makiInfo = whoGetsMaki(copyUsers)
    copyUsers = copyUsers.map(user => {
        score = calculateScore(user.keep);
        user.pudding += user.keep.filter((card) => card === 'pudding').length
        makiUser = makiInfo.filter((userMaki) => userMaki.id === user.id)
        if (makiUser.length > 0) score += makiUser[0].makiRollScore
        user.makiRollScore = 0
        user.score.push(score);
        return user
    });
    newUsers = generateHand(copyUsers, copyUsers[0].deck)
    return newUsers;
};

module.exports = updateUsersObject;