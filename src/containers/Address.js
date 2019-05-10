import { connect } from 'react-redux'
import Address from '@/components/Address/Address'
import { GetAddressesAction, PostAddressesAction, PutAddressesAction } from '../actions'

const mapStateToProps = (state) => {
  return { address: state.address }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    getAddresses: () => {
      dispatch(GetAddressesAction())
    },
    postAddress: (data) => {
      dispatch(PostAddressesAction(data))
    },
    putAddress: (data) => {
      dispatch(PutAddressesAction(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address)
