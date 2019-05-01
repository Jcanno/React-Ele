import * as React from 'react';
import { Layout, BackTop } from 'antd'
import Login from '../Login/Login'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import './App.less';

class App extends React.Component{
  render() {
    const { Content } = Layout;
    const { children } = this.props;
    const isLogin = true;

    return isLogin ? (
      <Layout className="layout">
        <BackTop />
        <Header />
        <Content className="content">
          {children}
        </Content>
        <Footer />
      </Layout>
    ) : (
      <div>
        <Login />
        <Footer />
      </div>   
    )

  }
}

export default App;