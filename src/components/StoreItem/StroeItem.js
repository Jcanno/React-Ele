import React, { Component } from 'react'
import { Popover, Divider, Avatar, Rate, Row, Col, Typography } from 'antd'
import store from '@/assets/store.jpg'
import './StoreItem.less'

export default class StroeItem extends Component {
  render() {

    const { Text, Title, Paragraph } = Typography;
    const content = (
      <div>
        <Text 
          className="content-name"
          ellipsis
        >
          德克士(百里路店）
        </Text>
        <p>其他快餐</p>
        <Divider />
        <Paragraph style={{width: '250px'}}>
          精致的炒饭外卖，精选周到的服务。为您提供美味的食物。享受最高级的待遇。精致的炒饭外卖，精选周到的服务。为您提供美味的食物。享受最高级的待遇。
        </Paragraph>
      </div>
    )


    return (
      <div >
        <Popover content={content} placement="rightTop">
          <Row gutter={10} className="store-item">
            <Col span={10} >
              <Avatar
                shape="square"
                size={80}
                src={store}
                className="store-avatar"
              />
              <Text className="store-time">
                28  分钟
              </Text>
            </Col>
            <Col span={14}>
              <Text 
                className="store-name"
                ellipsis
              >
                德克士(百里路店）
              </Text>
              <Rate
                allowHalf
                disabled
                defaultValue={4.5}
                className="store-rate"
              />
              <Text className="store-fee">
                配送费￥2
              </Text>
            </Col>
          </Row>
        </Popover>
      </div>
    )
  }
}
