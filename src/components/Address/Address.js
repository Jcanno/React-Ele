import React, { Component } from 'react'
import SiderBar from '../Layout/SiderBar/SiderBar'
import './Address.less'
import { Card, Row, Col, Icon } from 'antd';

export default class Address extends Component {
  render() {
    return (
      <div className="address">
        <SiderBar />
        <Card
          title="地址管理"
          className="address-card"
        >
          <Row gutter={10}>
            <Col xs={12} sm={12} md={12} lg={8}>
              <Card className="address-item">
                <div>
                  <p>
                    <span className="address-name">
                      金
                    </span>
                    <span className="address-sex">
                      先生
                    </span>
                    <div className="address-operate">
                      <span className="address-edit">
                        修改
                      </span>
                      <span>
                        删除
                      </span>
                    </div>
                  </p>
                  <span className="address-place">
                    杭州市西湖区中大银座A座2222室
                  </span>
                  <span className="address-phone">
                    13888888888
                  </span>
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8}>
              <Card className="address-add">
                <Icon type="plus" />
                添加新地址
              </Card>
            </Col>
            
          </Row>
        </Card>
      </div>
    )
  }
}
