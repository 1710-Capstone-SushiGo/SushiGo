import {createStore, combineReducers, applyMiddleware } from 'redux';

import users from './reducers/users';

const reducer = combineReducers({users});

const store = createStore(reducer);

export default store;

export * from './reducers/users';