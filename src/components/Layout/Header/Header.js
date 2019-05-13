import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon, Button } from 'antd'
import logo from '@/assets/ele.png'
import { Link, withRouter, } from 'react-router-dom'
import './Header.less'

class HeaderDom extends Component {
  render() {

    const { Header } = Layout;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/address">
            我的地址
          </Link>
        </Menu.Item>
        <Menu.Item>
          <span onClick={() => this.props.deleteLogin(() => this.props.history.push('/login'))}>
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    );

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
              <Link to="/order">
                我的订单
              </Link>
            </Menu.Item>
          </Menu>
          <Dropdown overlay={menu}>
            <Button ghost className="dp-btn">更多<Icon type="down" /></Button>
          </Dropdown>
        </Header>
      </div>
    )
  }
}

export default withRouter(HeaderDom)