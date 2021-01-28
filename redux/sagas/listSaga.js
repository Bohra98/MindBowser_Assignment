import { call, put, takeLatest } from 'redux-saga/effects';
import getGiphyList from '../service/fetchList';

function* fetchList(action){
    try {
        yield put ({
            type: 'FETCH_LIST_LOADING'
        })

        const { payload } = action

        const res = yield call(getGiphyList, payload.page)

        if(res.status === 200){
            yield put({
                type:'FETCH_LIST_SUCCESS',
                payload: res.data
            }) 
        }
        else{
            yield put({
                type:'FETCH_LIST_ERROR',
                payload:'Unable to retrieve list'
            })
        }
    }
    catch(err){
        yield put({
            type:'FETCH_LIST_ERROR',
            payload:err
        })
    }
}

function* listSaga(){
    yield takeLatest('FETCH_LIST',fetchList);
}

export default listSaga;