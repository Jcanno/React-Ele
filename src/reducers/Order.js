import { SAVE_ORDER, RECEIVE_ORDER } from '../constants'
const order = (state = { orders: [] }, action) => {
  switch (action.type) {
    case SAVE_ORDER:
      return state
    case RECEIVE_ORDER:
      return { ...state, orders: action.payload }
    default:
      return state
  }
}
export default order
