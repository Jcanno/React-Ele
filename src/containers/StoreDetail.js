import { connect } from 'react-redux'
import StoreDetail from '@/components/StoreDetail/StoreDetail'
import { GetStoreDetailAction } from '../actions'

const mapStateToProps = (state) => {
  return { 
    home: state.home,
    storeDetails: state.storeDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStoreDetails: () => {
      dispatch(
        GetStoreDetailAction()
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreDetail)
