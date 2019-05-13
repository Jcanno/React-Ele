import React, { Component } from 'react'
import SiderBar from '../Layout/SiderBar/SiderBar'
import { Card, Table, Avatar } from 'antd'
import './Order.less'
import moment from 'moment'

export default class Order extends Component {

  componentDidMount() {
    this.props.getOrders();
  }

  handleTime = (time) => {
    let timestamp = Date.parse(time) / 1000;
    return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');
  }

  render() {

    const { Column } = Table;

    const data = this.props.order.orders;

    return (
      <div className="order">
        <SiderBar />
        <Card
          title="我的订单"
          className="order-card"
        >
          <Table 
            dataSource={data}
            pagination={false}
            rowKey="id"  
          >
            <Column
              title="下单时间"
              dataIndex="time"
              key="time"
              render={(text) => {
                return (
                  <span>{this.handleTime(text)}</span>
                )               
              }}
            />
            <Column
              title="订单内容"
              dataIndex="orderinfo"
              key="orderinfo"
              render={(text, row) => {
                return (
                  <div className="order-info">
                    <Avatar src={row.storeimg} size={60} className="order-store"/>
                    <span className="order-menuname">{row.menuname}</span>
                  </div>
                )
              }}
            />
            <Column
              title="支付金额"
              dataIndex="paid"
              key="paid"
            />
            <Column
              title="状态"
              key="state"
              dataIndex="state"
              render={() => (
                <span>订单已完成</span>
              )}
            />
          </Table>,
        </Card>
      </div>
    )
  }
}
