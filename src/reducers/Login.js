// import { ArticleAction } from '../actions'
import { REQUEST_LOGIN, RECEIVE_TOKEN } from '../constants'
const login = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state
    case RECEIVE_TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
}
export default login
