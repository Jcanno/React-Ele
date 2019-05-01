import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './SiderBar.less'
import { Link } from 'react-router-dom'

export default class SiderBar extends Component {
  render() {
    return (
      <div>
        <Menu className="siderbar">
          <Menu.Item>
            <div>
              <Icon type="user" className="siderbar-icon"/>
              <Link to="/my">
                我的资料
              </Link>
            </div>           
          </Menu.Item>
          <Menu.Item>
            <div>
              <Icon type="file-text" className="siderbar-icon"/>
              <Link to="/my">
                我的订单
              </Link>
            </div>  
          </Menu.Item>
          <Menu.Item>菜单项</Menu.Item>
          <Menu.Item>菜单项</Menu.Item>
        </Menu>
      </div>
    )
  }
}
