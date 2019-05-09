import { connect } from 'react-redux'
import Login from '@/components/Login/Login'
import { PostLoginAction } from '../actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (data, callback) => {
      dispatch(
        PostLoginAction(data, callback)
      )
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
