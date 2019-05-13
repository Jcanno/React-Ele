import { call, put, all, takeLatest } from 'redux-saga/effects'
import { RECEIVE_STOREDETAIL, GET_STOREDETAIL } from '../constants'
import { storeDetails } from '@/api'

function* yieldStoreDetail() {
  const res = yield call(storeDetails);
  if(res) {
    yield put({ type: RECEIVE_STOREDETAIL, payload: res });
  }
}
export function* watchYieldStoreDetail() {
  yield all([
    yield takeLatest(GET_STOREDETAIL, yieldStoreDetail)
  ])
}
