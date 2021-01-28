import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers/index';
import rootSagas from '../sagas/index';

const persistConfig = {
  key:'root',
  storage:AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['list']
}

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  pReducer,
  applyMiddleware(reduxLogger, sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);


export default store;