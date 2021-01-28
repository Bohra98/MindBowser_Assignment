import { fork } from 'redux-saga/effects';
import listSaga from './listSaga';

function* rootSaga(){
    yield fork(listSaga);
}

export default rootSaga;