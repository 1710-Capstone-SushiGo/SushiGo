const PASS_HAND = 'PASS_HAND';

module.exports = {
  passHand: (allUsers) => {
    return { type: PASS_HAND, allUsers }
  },

  reducer: function (state = {
    all: [],
    current: {}
  }, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
      case PASS_HAND:
        newState = newState.sort((user1, user2) => { return user1.playerId - user2.playerId })
        let temp = newState.map(elem => {
          return elem.hand
        })
        for (var i = 0; i < temp.length - 1; i++) {
          newState[i].hand = temp[(i + 1)]
        }
        newState[temp.length - 1].hand = temp[0]
        return newState;
      default:
        return state;
    }
  }
}