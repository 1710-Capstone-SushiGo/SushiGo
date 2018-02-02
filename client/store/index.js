import {createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import users from './reducers/users';
import user from './reducers/user'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({users, user});
const middleware = composeWithDevTools(applyMiddleware(
	thunkMiddleware,
	createLogger({collapsed: true})
))

const store = createStore(reducer, middleware);

export default store;

export * from './reducers/users';
export * from './reducers/user';