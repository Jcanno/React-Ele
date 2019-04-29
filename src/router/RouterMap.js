import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './Loading'
import App from '../containers/App'

const RouterList = [
  {
    component: () => import('../components/Home/Home'),
    path: '/'
  },
  {
    component: () => import('../components/Order/Order'),
    path: '/myorder'
  },
]

const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading: Loading
            })}
          />
        ))}
      </Switch>
    </App>
  </Router>
)

export default RouterMap;