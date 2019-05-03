import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon, Button } from 'antd'
import logo from '@/assets/ele.png'
import { Link } from 'react-router-dom'
import './Header.less'

export default class HeaderDom extends Component {
  render() {

    const { Header } = Layout;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/my">
            个人中心
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/address">
            我的地址
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">
            退出登录
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/store">
            商品详情
          </Link>
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
              <Link to="/myorder">
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
