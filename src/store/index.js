import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { goodsReducer } from './counterReducer';

const persistConfig = { key: 'root', storage };                      // создаем настройку для localStorage

const rootReducer = combineReducers({ goods: goodsReducer });        // объединяем все редьюсеры

const persistedReducer = persistReducer(persistConfig, rootReducer); // объединяем два стора

const store = createStore(persistedReducer);            // создаем store из объединенных редьюсеров

export const persistor = persistStore(store);

export default store;

