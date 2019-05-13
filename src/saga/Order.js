import { call, put, all, takeLatest } from 'redux-saga/effects'
import { SAVE_ORDER, GET_ORDER, RECEIVE_ORDER } from '../constants'
import { postorder, getorders } from '@/api'

function* yieldPostOrder(action) {
  yield call(postorder, action.payload);
}

function* yieldGetOrders() {
  const res = yield call(getorders);
  yield put({type: RECEIVE_ORDER, payload: res});
}

export function* watchYieldOrder() {
  yield all([
    yield takeLatest(GET_ORDER, yieldGetOrders),
    yield takeLatest(SAVE_ORDER, yieldPostOrder)
  ])
}
