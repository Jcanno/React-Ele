// import { ArticleAction } from '../actions'
import { RECEIVE_ADDRESSES } from '../constants'
const home = (state = {addresses: []}, action) => {
  switch (action.type) {
    case RECEIVE_ADDRESSES:
      return { ...state, addresses: action.payload }
    default:
      return state
  }
}
export default home
