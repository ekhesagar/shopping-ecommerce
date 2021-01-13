import { createStore, applyMiddleware } from 'redux';

// Importing logger from redux-logger as a middleware
import logger from 'redux-logger'
import rootReducer from './root-reducer';

// applyMiddleware expects input as an array. 
const middlewares = [logger];


const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;