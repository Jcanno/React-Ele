import * as React from 'react';
import { Layout, BackTop, Col, Row } from 'antd'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import './App.less';
class App extends React.Component{
  render() {
    const { Content } = Layout;
    const { children } = this.props;

    return (
      <Layout className="layout">
        <BackTop />
        <Header />
        <Content className="content">
          {children}
        </Content>
        <Footer />
      </Layout>
    )
  }
}

export default App;