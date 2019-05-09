import React, { Component } from 'react'
import { Popover, Divider, Avatar, Rate, Row, Col, Typography } from 'antd'
// import store from '@/assets/store.jpg'
import './StoreItem.less'

export default class StroeItem extends Component {
  render() {

    const { Text, Paragraph } = Typography;
    const store = this.props.store;

    const content = (
      <div>
        <Text 
          className="content-name"
          ellipsis
        >
          {store.storename}
        </Text>
        <p>{store.storecal}</p>
        <Divider />
        <Paragraph style={{width: '250px'}}>
          {store.storeintro}
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
                src={store.storeimg}
                className="store-avatar"
              />
              <Text className="store-time">
                {store.storetime}
              </Text>
            </Col>
            <Col span={14}>
              <Text 
                className="store-name"
                ellipsis
              >
                {store.storename}
              </Text>
              <Rate
                allowHalf
                disabled
                defaultValue={store.storerate}
                className="store-rate"
              />
              <Text className="store-fee">
                {store.storefee}
              </Text>
            </Col>
          </Row>
        </Popover>
      </div>
    )
  }
}
