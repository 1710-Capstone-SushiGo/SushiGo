import {createStore, combineReducers, applyMiddleware } from 'redux';

import users from './reducers/users';
import user from './reducers/user'

const reducer = combineReducers({users, user});

const store = createStore(reducer);

export default store;

export * from './reducers/users';
export * from './reducers/user';