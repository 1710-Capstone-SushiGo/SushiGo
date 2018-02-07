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
    { username: 'Nick', userId: '2', socketId: '678', keep: ['wasabi','makiOne', 'makiTwo', 'tempura', 'makiOne', 'makiTwo'], hand: ['makiOne', 'makiTwo', 'tempura', 'makiOne', 'sashimi'],puddingScore: 2, score:[10, 23, 13] },
    { username: 'Jeff', userId: '1', socketId: '666', keep: ['sashimi','chopsticks', 'tempura', 'makiOne', 'sashimi','chopsticks'], hand: ['chopsticks', 'tempura', 'makiOne', 'sashimi', 'sashimi', 'wasabi'], puddingScore: 4, score:[21, 4, 11] },
    { username: 'Will', userId: '3', socketId: '660', keep: ['sashimi','chopsticks', 'tempura', 'makiOne', 'sashimi','chopsticks'], hand: ['chopsticks', 'tempura', 'makiOne', 'sashimi', 'sashimi', 'wasabi'], puddingScore: 3, score:[21, 4, 11] },
    { username: 'Jim', userId: '4', socketId: '656', keep: ['sashimi','chopsticks', 'tempura', 'makiOne', 'sashimi','chopsticks'], hand: ['chopsticks', 'tempura', 'makiOne', 'sashimi', 'sashimi', 'wasabi'], puddingScore: 1, score:[21, 4, 11] },
    { username: 'Jack', userId: '5', socketId: '664', keep: ['sashimi','chopsticks', 'tempura', 'makiOne', 'sashimi','chopsticks'], hand: ['chopsticks', 'tempura', 'makiOne', 'sashimi', 'sashimi', 'wasabi'], puddingScore: 0, score:[21, 4, 11] }
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
    