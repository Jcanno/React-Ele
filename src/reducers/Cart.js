import { SAVE_STOREDETAIL, CLEAR_STOREDETAIL } from '../constants'
const cart = (state = { cart: [], total: 0 }, action) => {
  switch (action.type) {
    case SAVE_STOREDETAIL:
    console.log(action.payload);
      if(action.payload.number === 0) {
        state.cart = state.cart.filter(item => action.payload.id !== item.id)
      }else if(state.cart.some(item => item.id === action.payload.id)) {
        for(let i = 0;i < state.cart.length;i++) {
          if(state.cart[i].id === action.payload.id) {
            state.cart[i] = action.payload;
          }
        }
      }else {
        state.cart.push(action.payload);
      }  
      state.total = 0;
      state.cart.map(item => {
        return state.total += item.number * item.menuprice; 
      })
      return state
    case CLEAR_STOREDETAIL:
      state = {
        cart: [],
        total: 0
      }
      return state
    default:
      return state
  }
}
export default cart
