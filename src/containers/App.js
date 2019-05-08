import App from '@/components/App/App'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    // actions: dispatch({ type: REQUEST_INFO }),
    // fetchArticle: (payload: IPayload) => {
    //   dispatch({
    //     payload,
    //     type: REQUEST_ARTICLES
    //   })
    // }
  }
}


const AppMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)