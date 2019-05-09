import { call, put, all, takeLatest } from 'redux-saga/effects'
import { GET_ADDRESSES, RECEIVE_ADDRESSES, POST_ADDRESSES } from '../constants'
import { addresses, postaddress, deleteaddress } from '@/api'

function* yieldAddresses() {
  const res = yield call(addresses);
  console.log(res);
  yield put({ type: RECEIVE_ADDRESSES, payload: res });
}

function* yieldAddAddress(action) {
  yield call(postaddress, action.payload);
}

// function* yieldAddress(action) {
  // const res = yield call(postaddress, action.payload);

// }

export function* watchYieldAddresses() {
  yield all([
    yield takeLatest(GET_ADDRESSES, yieldAddresses),
    yield takeLatest(POST_ADDRESSES, yieldAddAddress),

  ])
}
