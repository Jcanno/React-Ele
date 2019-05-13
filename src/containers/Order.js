import { connect } from 'react-redux'
import Order from '@/components/Order/Order'
import { GetOrdersAction } from '../actions'

const mapStateToProps = (state) => {
  return { 
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => {
      dispatch(
        GetOrdersAction()
      )  
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
