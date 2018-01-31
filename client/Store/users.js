import { createStore } from 'redux'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const KEEP_CARD = 'KEEP_CARD'
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
    default:
      return state
  }
}

const store = createStore(reducer)
export default store