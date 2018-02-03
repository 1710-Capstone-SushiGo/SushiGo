const createStore = require('redux').createStore
const combineReducers = require('redux').combineReducers
const applyMiddleware = require('redux').applyMiddleware
const endTurn = require('./reducers/endTurn')


const reducer = combineReducers({ endTurn });

const store = createStore(reducer);


module.exports = { store, endTurn }