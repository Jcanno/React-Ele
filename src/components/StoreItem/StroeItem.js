import React, { Component } from 'react'
import { Popover, Button, Avatar, Rate, Row, Col, Typography } from 'antd'
import store from '@/assets/store.jpg'


export default class StroeItem extends Component {
  render() {

    const { Text, Title } = Typography;

    return (
      <div >
        <Row gutter={10} className="store-item">
          <Col span={10}>
            <Avatar
              shape="square"
              src={store}
              size={60}
              className="store-avatar"
            />
            <Text className="store-time">
              28  分钟
            </Text>
          </Col>
          <Col span={14}>
            <Title level={4} ellipsis>德克士（百里路店）</Title>
            <Rate 
              allowHalf 
              defaultValue={4.5}
              disabled
            />
            <Text className="store-fee">
              配送费￥2
            </Text>
          </Col>
        </Row>
        
      </div>
    )
  }
}
