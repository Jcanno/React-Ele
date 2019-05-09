// import { ArticleAction } from '../actions'
import { GET_STORES, RECEIVE_SOTRES } from '../constants'
const home = (state = {stores: []}, action) => {
  switch (action.type) {
    case GET_STORES:
      return state
    case RECEIVE_SOTRES:
      return { ...state, stores: action.payload }
    default:
      return state
  }
}
export default home
