import { createStore } from 'redux'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const KEEP_CARD = 'KEEP_CARD'
const HAND_MINUS = 'HAND_MINUS'
/**
 * INITIAL STATE
 */
// const defaultUser = {username: 'Nick', keeps: [], hand: []};
const defaultUser = {currentUser: 'Nick', keep: ['wasabi'], hand: ['maki1', 'maki2']}
/**
 * ACTION CREATORS
 */
export const getUser = (user) => {
  return {type: GET_USER, user}
}

export const keepCard = (card) => {
    return {type: KEEP_CARD, card}
}

export const handMinus = (card) => {
  return {type: HAND_MINUS, card}
}
/**
 * REDUCER
 */
function reducer(state = defaultUser, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case GET_USER:
      return action.user
    case KEEP_CARD:
        return newState.keep.push(action.card)
    case HAND_MINUS:
        
    default:
      return state
  }
}

const store = createStore(reducer)
export default store