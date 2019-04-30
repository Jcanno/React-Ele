import React, { Component } from 'react'
import { List, Row, Col, Card } from 'antd'
import StoreItem from '../StoreItem/StroeItem'

export default class Home extends Component {
  render() {

    const gridStyle = {
      width: '25%',
      boder: 0
    };

    return (
      <div >
        <Card
          bordered={false}
          bodyStyle={{'padding': '-24'}}
        >
          {/* <Card.Grid style={gridStyle}>
            <StoreItem />
          </Card.Grid> */}
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
        </Card>
      </div>
    )
  }
}
