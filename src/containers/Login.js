import { connect } from 'react-redux'
import Login from '@/components/Login/Login'
import { LoginAction } from '../actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (data, callback) => {
      dispatch(
        LoginAction(data, callback)
      )
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
