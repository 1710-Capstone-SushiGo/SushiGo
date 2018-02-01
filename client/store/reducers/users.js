/**
 * ACTION TYPES
 */
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const PLAY_CARD = 'PLAY_CARD';
/**
 * INITIAL STATE
 */
// const defaultUser = {username: 'Nick', keeps: [], hand: []};
const defaultUser = {
  all: [
<<<<<<< HEAD
    { username: 'Nick', userId: '2', socketId: '678', keep: ['wasabi'], hand: ['maki1', 'makiTwo'] },
    { username: 'Jeff', userId: '1', socketId: '666', keep: ['sashimi'], hand: ['chopsticks', 'tempura', 'makiOne', 'sashimi', 'sashimi', 'wasabi'] }
=======
    { username: 'Nick', userId: '2', socketId: '678', keep: ['wasabi'], hand: ['maki1', 'maki2'] },
    { username: 'Jeff', userId: '1', socketId: '666', keep: ['sashimi'], hand: ['chopsticks', 'tempura','egg','maki2','maki3','wasabi','egg'] }
>>>>>>> 2a3f2dca2a8f6a9c2c57702569e90982596d8e7a
  ],
  current: {}
};
/**
 * ACTION CREATORS
 */
export const getCurrentUser = (socketId) => {
  return { type: GET_CURRENT_USER, socketId }
}

export const playCard = (socketId, card) => {
  return { type: PLAY_CARD, card, socketId }
}
/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_CURRENT_USER:
      newState.current =  newState.all.find(ele => ele.socketId === action.socketId);
      return newState;
    case PLAY_CARD:
      let user = newState.all.find(ele => ele.socketId === action.socketId);
      let i = newState.all.indexOf(user);
      user.keep.push(action.card);
      let j = user.hand.indexOf(action.card);
      user.hand.splice(j, 1);
      newState.all[i] = user;
      return newState;
    default:
      return state;
  }
}
    