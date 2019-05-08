import { all } from 'redux-saga/effects'
import { watchYieldLogin } from './Login'


export default function* rootSaga(){
  yield all([
    watchYieldLogin()
  ])
}