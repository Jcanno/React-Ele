import { connect } from 'react-redux'
import Home from '@/components/Home/Home'
import { GetStoresAction } from '../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return { home: state.home }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStores: (data, callback) => {
      dispatch(
        GetStoresAction(data, callback)
      )
    } 
  }
}

const HomeMap = withRouter(Home)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeMap)
