import { combineReducers } from 'redux'
import login from './Login'
import home from './Home'
import address from './Address'
import storeDetail from './StoreDetail'

const reducer = combineReducers({
  login,
  home,
  address,
  storeDetail
})

export default reducer