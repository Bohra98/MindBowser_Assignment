import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import listreducer from './listreducer';

const listPersistConfig = {
    key:'list',
    storage:AsyncStorage,
    whitelist:['listData'],
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
    list: persistReducer(listPersistConfig, listreducer)
});

export default rootReducer;