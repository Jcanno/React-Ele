import * as React from 'react';
import { Layout, BackTop } from 'antd'
import Login from '@/containers/Login'
import Header from '@/containers/Header'
import Footer from '../Layout/Footer/Footer'
import './App.less';

class App extends React.Component{
  render() {
    const { Content } = Layout;
    const { children } = this.props;
    const token = this.props.login.token;

    return token ? (
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