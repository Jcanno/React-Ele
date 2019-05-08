import React, { Component } from 'react'
import SiderBar from '../Layout/SiderBar/SiderBar'
import { Card, Table, Avatar } from 'antd'
import './Order.less'
import store from '@/assets/store.jpg'

export default class Order extends Component {


  render() {

    const { Column } = Table;

    const data = [{
      key: '1',
      time: 'John',
      orderinfo: 'Brown',
      money: 32,
      state: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      img: store
    }, {
      key: '2',
      time: 'John',
      orderinfo: 'Brown',
      money: 32,
      state: 'New York No. 1 Lake Park',
      tags: ['loser'],
      img: store
    }, {
      key: '3',
      time: 'John',
      orderinfo: 'Brown',
      money: 32,
      state: 'New York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      img: store
    }];

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
          >
            <Column
              title="下单时间"
              dataIndex="time"
              key="time"
            />
            <Column
              title="订单内容"
              dataIndex="orderinfo"
              key="orderinfo"
              render={(text, row) => {
                return (
                  <div>
                    <Avatar src={row.img} size={60} className="order-store"/>
                    <span>{text}</span>
                  </div>
                )
                
              }}
            />
            <Column
              title="支付金额"
              dataIndex="money"
              key="money"
            />
            <Column
              title="状态"
              key="state"
              dataIndex="state"
            />
          </Table>,
        </Card>
      </div>
    )
  }
}
