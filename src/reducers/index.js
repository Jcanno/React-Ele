import { combineReducers } from 'redux'
import login from './Login'
import home from './Home'
import address from './Address'
import storeDetail from './StoreDetail'
import cart from './Cart'

const reducer = combineReducers({
  login,
  home,
  address,
  storeDetail,
  cart
})

export default reducer