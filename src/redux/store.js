import { createStore, applyMiddleware } from 'redux';

// It is used for storing app store into local storage.
import { persistStore } from 'redux-persist'

// Importing logger from redux-logger as a middleware
import logger from 'redux-logger'
import rootReducer from './root-reducer';

// applyMiddleware expects input as an array. 
const middlewares = [logger];


const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };