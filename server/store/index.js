const createStore = require('redux').createStore
const combineReducers = require('redux').combineReducers
const applyMiddleware = require('redux').applyMiddleware
const endTurn = require('./reducers/endTurn')


const reducer = combineReducers({ endTurn });

const store = createStore(reducer);

// export default store;

// export * from './reducers/endTurn';

module.exports = {store, endTurn}