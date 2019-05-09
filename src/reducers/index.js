import { combineReducers } from 'redux'
import login from './Login'
import home from './Home'

const reducer = combineReducers({
  login,
  home
})

export default reducer