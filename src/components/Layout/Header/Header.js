import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import logo from '@/assets/ele.png'
import { Link } from 'react-router-dom'
import './Header.less'

export default class HeaderDom extends Component {
  render() {

    const { Header } = Layout;
    
    return (
      <div>
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
      </div>
    )
  }
}
