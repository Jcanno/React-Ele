import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './SiderBar.less'
import { Link, withRouter } from 'react-router-dom'

class SiderBar extends Component {

  state = {
    current: ""
  }

  componentDidMount() {
    this.setState({
      current: this.props.location.pathname
    })
  }

  render() {
    return (
      <div>
        <Menu 
          className="siderbar"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="/address">
            <div>
              <Icon type="user" className="siderbar-icon"/>
              <Link to="/address">
                我的资料
              </Link>
            </div>           
          </Menu.Item>
          <Menu.Item key="/myorder">
            <div>
              <Icon type="file-text" className="siderbar-icon"/>
              <Link to="/myorder">
                我的订单
              </Link>
            </div>  
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(SiderBar)