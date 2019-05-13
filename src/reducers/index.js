import { combineReducers } from 'redux'
import login from './Login'
import home from './Home'
import address from './Address'
import storeDetail from './StoreDetail'
import cart from './Cart'
import order from './Order'

const reducer = combineReducers({
  login,
  home,
  address,
  storeDetail,
  cart,
  order
})

export default reducer