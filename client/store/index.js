import {createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import gameUser from './reducers/gameUser';
import user from './reducers/user'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({gameUser, user});
const middleware = composeWithDevTools(applyMiddleware(
	thunkMiddleware,
	createLogger({collapsed: true})
))

const store = createStore(reducer, middleware);

export default store;

export * from './reducers/gameUser';
export * from './reducers/user';