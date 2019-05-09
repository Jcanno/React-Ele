import { combineReducers } from 'redux'
import login from './Login'
import home from './Home'
import address from './Address'

const reducer = combineReducers({
  login,
  home,
  address
})

export default reducer