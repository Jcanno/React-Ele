import { REQUEST_LOGIN, RECEIVE_TOKEN, DELETE_TOKEN } from '../constants'
const login = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state
    case RECEIVE_TOKEN:
      return { ...state, token: action.payload }
    case DELETE_TOKEN:
      action.onSuccess();
      return { ...state, token: ""}
    default:
      return state
  }
}
export default login
