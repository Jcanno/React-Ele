import React, { Component } from 'react'
import { List, Row, Col } from 'antd'
import StoreItem from '../StoreItem/StroeItem'
import './Home.less'


export default class Home extends Component {
  render() {

    const storeGird = {
      xs: {span: 12},
      sm: {span: 12},
      md: {span: 8},
      lg: {span: 6}
    }

    return (
      <div >
        <List 
          className="store-list"
          bordered
        >
          <Row>
            <Col xs={storeGird.xs}  sm={storeGird.sm} md={storeGird.md} lg={storeGird.lg}>
              <StoreItem />
            </Col>
            <Col xs={storeGird.xs}  sm={storeGird.sm} md={storeGird.md} lg={storeGird.lg}>
              <StoreItem />
            </Col>
            <Col xs={storeGird.xs}  sm={storeGird.sm} md={storeGird.md} lg={storeGird.lg}>
              <StoreItem />
            </Col>
            <Col xs={storeGird.xs}  sm={storeGird.sm} md={storeGird.md} lg={storeGird.lg}>
              <StoreItem />
            </Col>
            <Col xs={storeGird.xs}  sm={storeGird.sm} md={storeGird.md} lg={storeGird.lg}>
              <StoreItem />
            </Col>
          </Row>
        </List>
      </div>
    )
  }
}
