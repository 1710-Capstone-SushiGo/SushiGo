import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_LOGIN_USER = 'GET_LOGIN_USER'
const PLAY_CARD = 'PLAY_CARD';
/**
 * INITIAL STATE
 */
const defaultUser = {
  all: [
    { username: 'Nick', userId: '2', socketId: '678', keep: ['wasabi', 'makiTwo'], hand: ['maki1', 'makiTwo'] },
    { username: 'Jeff', userId: '1', socketId: '666', keep: ['sashimi', 'chopsticks'], hand: ['chopsticks', 'tempura', ], haveChopsticks: true, playedChopsticks: false, playedCard: false }
  ],
  current: {}
};
/**
 * ACTION CREATORS
 */
export const getCurrentUser = (userId) => {
  return { type: GET_CURRENT_USER, userId }
}

export const getLoginUser = (userId) => {
  return { type: GET_LOGIN_USER, userId}
}

export const playCard = (socketId, card) => {
  return { type: PLAY_CARD, card, socketId }
}

/**
 * THUNK CREATORS
 */
export const fetchUser = (user) => {
  return function(dispatch){
    axios.get(`/api/users/${user}`)
      .then( res => res.data)
      .then( users => dispatch(getCurrentUser(user)))
      .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */

export default function (state = defaultUser, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_LOGIN_USER:

      return newState
    case GET_CURRENT_USER:
      newState.current =  newState.all.find(ele => ele.socketId === action.userId);
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
    