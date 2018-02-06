const passHand = (allUsers) => {
  let newState = allUsers.slice();
  newState = newState.sort((user1, user2) => user1.playerId - user2.playerId);
  let temp = newState.map(elem => elem.hand);
  for (let i = 0; i < temp.length - 1; i++)
    newState[i].hand = temp[(i + 1)];
  newState[temp.length - 1].hand = temp[0];
  return newState;
}

module.exports = passHand;