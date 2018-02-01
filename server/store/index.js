import {createStore, combineReducers, applyMiddleware } from 'redux';

import endTurn from './reducers/endTurn';

const reducer = combineReducers({ endTurn });

const store = createStore(reducer);

export default store;

export * from './reducers/endTurn';
