import React, { Component } from 'react'
import { Avatar } from 'antd'
import './Pay.less'

export default class Pay extends Component {
  render() {
    return (    
      <div className="pay-success">
        <Avatar 
          size={30} 
          icon="check"
          className="pay-sign"
        /> 
        下单成功!
      </div>
    )
  }
}
