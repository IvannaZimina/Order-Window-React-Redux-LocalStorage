import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'                     // defaults to localStorage for web
import { productReducer } from './productReducer';
import { orderReducer } from './orderReducer';

const persistConfig = { key: 'root', storage };                      // создаем настройку для localStorage

const rootReducer = combineReducers({                                // объединяем все редьюсеры
    productList: productReducer,
    orderList: orderReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // объединяем два стора

const store = createStore(persistedReducer);                         // создаем store из объединенных редьюсеров

export const persistor = persistStore(store);

export default store;

