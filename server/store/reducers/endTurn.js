/**
 * ACTION TYPES
 */
const PASS_HAND = 'PASS_HAND';
/**
 * INITIAL STATE
 */
// const defaultUser = {username: 'Nick', keeps: [], hand: []};
const defaultUser = {
  all: [
    { username: 'Nick', userId: '2', playerId: 1, socketId: '678', keep: ['wasabi'], hand: ['maki1', 'makiTwo'] },
    { username: 'Jeff', userId: '1', playerId: 2, socketId: '666', keep: ['sashimi'], hand: ['chopsticks', 'tempura', 'makiOne', 'sashimi', 'sashimi', 'wasabi'] }
  ],
  current: {}
};
/**
 * ACTION CREATORS
 */
export const passHand = (playerId) => {
  return { type: PASS_HAND, playerId }
}

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case PASS_HAND:
        let total = newState.all.length;
        let nextPlayer =  newState.all.find(ele => 
            ele.playerId === (action.playerId%total + 1));
        let idx = newState.all.indexOf(nextPlayer);
        newState.all[idx].hand = newState.current.hand; 
        return newState;
    default:
        return state;
  }
}