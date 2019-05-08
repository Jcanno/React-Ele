import { call, takeEvery, put } from 'redux-saga/effects'
import { REQUEST_LOGIN, RECEIVE_TOKEN } from '../constants'
import { login } from '@/api'

function* yieldLogin(action) {
  const res = yield call(login, action.payload);
  console.log(res);
  if(res.token) {
    action.onSuccess();
    yield put({ type: RECEIVE_TOKEN, payload: res.token });
  }
}

export function* watchYieldLogin() {
  yield takeEvery(REQUEST_LOGIN, yieldLogin)
}
