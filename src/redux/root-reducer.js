import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'

// importing local storage from persist
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


// WhiteList array contains all the reducer string in root reducer.
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// This will provide a modified root reducer which will enable local storage.
export default persistReducer(persistConfig, rootReducer)