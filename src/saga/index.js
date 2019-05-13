import { all } from 'redux-saga/effects'
import { watchYieldLogin } from './Login'
import { watchYieldStores } from './Home'
import { watchYieldAddresses } from './Address'
import { watchYieldStoreDetail } from './StoreDetail'
import { watchYieldOrder } from './Order'

export default function* rootSaga(){
  yield all([
    watchYieldLogin(),
    watchYieldStores(),
    watchYieldAddresses(),
    watchYieldStoreDetail(),
    watchYieldOrder()
  ])
}