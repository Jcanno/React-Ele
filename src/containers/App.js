import App from '@/components/App/App'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DeleteLoginAction } from '@/actions'

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteLogin: (callback) => {
      dispatch(DeleteLoginAction(callback))
    }
  }
}


const AppMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)