import { connect } from 'react-redux'
import Header from '@/components/Layout/Header/Header'
import { DeleteLoginAction } from '../actions'

const mapStateToProps = (state) => {
  return {}
}
export const mapDispatchToProps = (dispatch) => {
  return {
    deleteLogin: (callback) => {
      dispatch(DeleteLoginAction(callback))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
