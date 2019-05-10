import { call, put, all, takeLatest } from 'redux-saga/effects'
import { GET_ADDRESSES, RECEIVE_ADDRESSES, POST_ADDRESSES, PUT_ADDRESSES } from '../constants'
import { addresses, postaddress, putaddress,deleteaddress } from '@/api'

function* yieldAddresses() {
  const res = yield call(addresses);
  console.log(res);
  yield put({ type: RECEIVE_ADDRESSES, payload: res });
}

function* yieldAddAddress(action) {
  yield call(postaddress, action.payload);
  yield put({ type: GET_ADDRESSES })
}

function* yieldPutAddress(action) {
  yield call(putaddress, action.payload);
  yield put({ type: GET_ADDRESSES })
}

// function* yieldAddress(action) {
  // const res = yield call(postaddress, action.payload);

// }

export function* watchYieldAddresses() {
  yield all([
    yield takeLatest(GET_ADDRESSES, yieldAddresses),
    yield takeLatest(POST_ADDRESSES, yieldAddAddress),
    yield takeLatest(PUT_ADDRESSES, yieldPutAddress),
  ])
}
