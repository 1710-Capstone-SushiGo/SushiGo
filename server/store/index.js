const createStore = require('redux').createStore
const combineReducers = require('redux').combineReducers
const applyMiddleware = require('redux').applyMiddleware
const passHand = require('./reducers/endTurn')


const reducer = combineReducers({ passHand });

const store = createStore(reducer);

// export default store;

// export * from './reducers/endTurn';

module.exports = { store, passHand }