import { call, put, all, takeLatest } from 'redux-saga/effects'
import { GET_ADDRESSES, RECEIVE_ADDRESSES, POST_ADDRESSES, PUT_ADDRESSES, DELETE_ADDRESSES } from '../constants'
import { addresses, postaddress, putaddress, deleteaddress } from '@/api'

function* yieldAddresses() {
  const res = yield call(addresses);
  yield put({ type: RECEIVE_ADDRESSES, payload: res });
}

function* yieldPostAddress(action) {
  yield call(postaddress, action.payload);
  yield put({ type: GET_ADDRESSES })
}

function* yieldPutAddress(action) {
  yield call(putaddress, action.payload);
  yield put({ type: GET_ADDRESSES })
}

function* yieldDeleteAddress(action) {
  yield call(deleteaddress, action.payload);
  yield put({ type: GET_ADDRESSES })
}

export function* watchYieldAddresses() {
  yield all([
    yield takeLatest(GET_ADDRESSES, yieldAddresses),
    yield takeLatest(POST_ADDRESSES, yieldPostAddress),
    yield takeLatest(PUT_ADDRESSES, yieldPutAddress),
    yield takeLatest(DELETE_ADDRESSES, yieldDeleteAddress),
  ])
}
