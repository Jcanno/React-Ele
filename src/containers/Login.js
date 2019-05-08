import { connect } from 'react-redux'
import Login from '@/components/Login/Login'
import { REQUEST_LOGIN } from '../constants'


const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch(
        { type: REQUEST_LOGIN, payload: data }
      )
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
