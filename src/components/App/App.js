import * as React from 'react';
import { Layout, Menu, BackTop, Divider, Col, Row } from 'antd'
import logo from '../../assets/ele.png'
import { Link } from 'react-router-dom'
import './App.less';
class App extends React.Component{
  render() {
    const { Header, Content, Footer } = Layout;
    const { children, } = this.props

    return (
      <Layout className="layout">
        <BackTop />
        <Header className="header">
          <img 
            src={logo} 
            className="logo" 
            alt=""
          />
          <Menu
            theme="dark"
            mode="horizontal"
            className="menu"
            defaultSelectedKeys={["1"]}
          > 
            <Menu.Item key="1">
              <Link to="/">
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/myorder">
                我的订单
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          {children}
        </Content>
        <Footer className="footer">
          <Divider />
          All Rights Reserved
        </Footer>
      </Layout>
    )
  }
}

export default App;