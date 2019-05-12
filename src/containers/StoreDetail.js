import { connect } from 'react-redux'
import StoreDetail from '@/components/StoreDetail/StoreDetail'
import { GetStoreDetailAction, SaveStoreDetailAction, ClearStoreDetailAction } from '../actions'

const mapStateToProps = (state) => {
  return { 
    home: state.home,
    storeDetails: state.storeDetail,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStoreDetails: () => {
      dispatch(
        GetStoreDetailAction()
      )
    },
    saveCart: (data) => {
      dispatch(
        SaveStoreDetailAction(data)
      )
    },
    clearCart: () => {
      dispatch(
        ClearStoreDetailAction()
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreDetail)
