import { connect } from 'react-redux'
import StoreDetail from '@/components/StoreDetail/StoreDetail'
import { GetStoreDetailAction, SaveStoreDetailAction, ClearStoreDetailAction } from '../actions'
import { withRouter } from 'react-router-dom'


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
const StoreDetailMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreDetail)

export default withRouter(StoreDetailMap)
