// import { ArticleAction } from '../actions'
import { REQUEST_LOGIN } from '../constants'
const login = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state
    default:
      return state
  }
}
export default login
