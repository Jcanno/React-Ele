import { connect } from 'react-redux'
import OrderDetail from '@/components/OrderDetail/OrderDetail'

const mapStateToProps = (state) => {
  return { 
    home: state.home,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail)
