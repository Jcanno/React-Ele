import { call, put, all, takeLatest } from 'redux-saga/effects'
import { GET_STORES, RECEIVE_SOTRES } from '../constants'
import { stores } from '@/api'

function* yieldStores(action) {
  const res = yield call(stores);
  yield put({ type: RECEIVE_SOTRES, payload: res });
}

export function* watchYieldStores() {
  yield all([
    yield takeLatest(GET_STORES, yieldStores)
  ])
}
