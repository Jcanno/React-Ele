import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import './Footer.less'

export default class FooterDom extends Component {
  render() {

    const { Footer } = Layout;

    return (
      <div>
        <Footer className="footer">
          <Divider />
          All Rights Reserved
        </Footer>
      </div>
    )
  }
}
