import { createStore } from 'redux';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const PLAY_CARD = 'PLAY_CARD';
/**
 * INITIAL STATE
 */
// const defaultUser = {username: 'Nick', keeps: [], hand: []};
const defaultUser = { currentUser: 'Nick', keep: ['wasabi'], hand: ['maki1', 'maki2'] }
/**
 * ACTION CREATORS
 */
export const getUser = (user) => {
  return { type: GET_USER, user }
}

export const playCard = (card) => {
  return { type: PLAY_CARD, card }
}

export const removeHand = (card) => {
  return { type: REMOVE_CARD_FROM_HAND, card }
}
/**
 * REDUCER
 */
function reducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case PLAY_CARD: {
      let newState = Object.assign({}, state); 
      newState.keep.push(action.card);
      let idx = newState.hand.indexOf(action.card);
      newState.hand.splice(idx, 1); 
      return newState;
    }
    default:
      return state;
  }
}

const store = createStore(reducer)
export default store