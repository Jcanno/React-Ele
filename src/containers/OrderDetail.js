import { connect } from 'react-redux'
import OrderDetail from '@/components/OrderDetail/OrderDetail'
import { withRouter } from 'react-router-dom'
import { SaveStoreDetailAction, SaveOrderAction } from '../actions'

const mapStateToProps = (state) => {
  return { 
    home: state.home,
    cart: state.cart,
    address: state.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCart: (data) => {
      dispatch(
        SaveStoreDetailAction(data)
      )
    },
    saveOrder: (data) => {
      dispatch(
        SaveOrderAction(data)
      )
    }
  }
}

const OrderDetailMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail)

export default withRouter(OrderDetailMap)
