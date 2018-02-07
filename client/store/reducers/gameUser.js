import axios from 'axios'
/**
 * ACTION TYPES
 */
const PLAY_CARD = 'PLAY_CARD';
const GET_USERS = 'GET_USERS';
/**
 * INITIAL STATE
 */
const defaultUser = {
  all: [],
  current: {}
};
/**
 * ACTION CREATORS
 */
// export const getCurrentUser = (userId) => {
//   return { type: GET_CURRENT_USER, userId }
// }

// export const getLoginUser = (userId) => {
//   return { type: GET_LOGIN_USER, userId}
// }

export const playCard = (playerId, card) => {
  return { type: PLAY_CARD, card, playerId }
}

export const getUsers = (users) => {
  return { type: GET_USERS, users}
}

/**
 * THUNK CREATORS
 */
// export const fetchUser = (user) => {
//   return function(dispatch){
//     axios.get(`/api/users/${user}`)
//       .then( res => res.data)
//       .then( users => dispatch(getCurrentUser(user)))
//       .catch(err => console.log(err))
//   }
// }

/**
 * REDUCER
 */

export default function (state = defaultUser, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, newState, action.users);
    case PLAY_CARD:
      let user = newState.all.find(ele => ele.playerId === action.playerId);
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
    