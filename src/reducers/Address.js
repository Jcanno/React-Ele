// import { ArticleAction } from '../actions'
import { GET_ADDRESSES, RECEIVE_ADDRESSES, POST_ADDRESS } from '../constants'
const home = (state = {addresses: []}, action) => {
  switch (action.type) {
    case RECEIVE_ADDRESSES:
      return { ...state, addresses: action.payload }
    // case RECEIVE_SOTRES:
    //   return { ...state, stores: action.payload }
    default:
      return state
  }
}
export default home
