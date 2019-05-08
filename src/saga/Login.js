import { call, takeEvery } from 'redux-saga/effects'
import { LoginAction } from '../actions'
import { REQUEST_LOGIN } from '../constants'
import { login } from '@/api'

function* yieldLogin(action) {
  const res = yield call(login, action.payload);
  console.log(res);
  
  // yield put({ type: RECEIVE_ARTICLE, article })
}
export function* watchYieldLogin() {
  yield takeEvery(REQUEST_LOGIN, yieldLogin)
}
