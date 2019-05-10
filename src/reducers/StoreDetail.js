import { RECEIVE_STOREDETAIL } from '../constants'
const storeDetail = (state = { storeDetails: [] }, action) => {
  switch (action.type) {
    case RECEIVE_STOREDETAIL:
      return { ...state, storeDetails: action.payload }
    default:
      return state
  }
}
export default storeDetail
