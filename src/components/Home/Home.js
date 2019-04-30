import React, { Component } from 'react'
import { List, Row, Col, Card } from 'antd'
import StoreItem from '../StoreItem/StroeItem'
import './Home.less'


export default class Home extends Component {
  render() {


    return (
      <div >
        <List className="store-list">
          <Row>
            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>

            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>
          </Row>

        </List>

        {/* <Card
          bordered={false}
          className="store-list"
          bodyStyle={bodyStyle}
        >
          <Row>
            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>
            <Col span={6}>
              <StoreItem />
            </Col>
          </Row>
        </Card> */}
      </div>
    )
  }
}
