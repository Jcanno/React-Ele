import { all } from 'redux-saga/effects'
import { watchYieldLogin } from './Login'
import { watchYieldStores } from './Home'

export default function* rootSaga(){
  yield all([
    watchYieldLogin(),
    watchYieldStores()
  ])
}