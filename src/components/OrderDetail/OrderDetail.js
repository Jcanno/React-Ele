import React, { Component } from 'react'
import './OrderDetail.less'
import { Steps, Icon, Row, Col, Card, Table, InputNumber, } from 'antd';

export default class OrderDetail extends Component {

  onConfirm = () => {
    
  }

  render() {


    const store = this.props.home.store;

    const data = [{
      key: '1',
      good: '牛肉饼',
      count: '5',
      money: '￥6.80',
    }, {
      key: '2',
      good: '曼玲特色蒸饺',
      count: '4',
      money: '￥10.80',
    }, {
      key: '3',
      good: '清火白粥',
      count: '2',
      money: '￥6.80',
    }];
    
    const Step = Steps.Step;
    const { Column } = Table;

    return (
      <div>
        <Steps 
          current={1}
          style={{marginTop: '20px'}}
          labelPlacement="vertical"
        >
          <Step title="选择商品" />
          <Step title="确认订单信息" />
          <Step title="成功提交订单"  />
        </Steps>
        <Row gutter={15}>
          <Col span={8}>
            <Card
              title="订单详情"
              style={{ width: '100%' }}
            >
              <Table dataSource={data} pagination={false}>
                <Column
                  title="商品"
                  dataIndex="good"
                  key="good"
                />
                <Column
                  title="份数"
                  dataIndex="count"
                  key="count"
                  render={(number) => (
                    <InputNumber min={1} max={10} defaultValue={number} />
                  )}
                />
                <Column
                  title="小计(元)"
                  dataIndex="money"
                  key="money"
                />
              </Table>
              <p className="order-fee-box">
                {store.storefee}
              </p>

              <p className="order-total-fee">
                <span className="order-total-sign">￥</span>
                <span className="order-total-number">80.00</span>
              </p>
              <p className="order-total-goods">共2份商品</p>
            </Card>
          </Col>
          <Col span={16}>
            <Card
              title="收货地址"
              style={{ width: '100%' }}
            >
              <div tabIndex="1" className="address-box">
                <Icon 
                  type="environment"
                  className="address-img"
                />
                <div className="address-info">
                  <span className="address-name">金</span>
                  <span className="address-name">先生</span>
                  <span>13888888888</span>
                  <span className="address">杭州市西湖区XXXXX幢XXX室</span>
                </div>
              </div>
              <button className="check-order" onClick={this.onConfirm}>确认下单</button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
