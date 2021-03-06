import { call, put, all, takeLatest } from 'redux-saga/effects'
import { REQUEST_LOGIN, RECEIVE_TOKEN } from '../constants'
import { login } from '@/api'

function* yieldLogin(action) {
  const res = yield call(login, action.payload);
  if(res.token) {
    action.onSuccess();
    yield put({ type: RECEIVE_TOKEN, payload: res.token });
  }
}
export function* watchYieldLogin() {
  yield all([
    yield takeLatest(REQUEST_LOGIN, yieldLogin)
  ])
}
