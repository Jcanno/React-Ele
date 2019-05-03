import React, { Component } from 'react'
import './StoreDetail.less'
import { Avatar, Typography, Rate } from 'antd'
import store from '@/assets/store.jpg'

export default class StoreDetail extends Component {
  render() {

    const { Title } = Typography;

    return (
      <div>
        <div className="detail-header">
          <div className="detail-intro">
            <Avatar 
              src={store}
              size={80}
              className="detail-avatar"
            />
            <div className="detail-box">
              <Title
                className="detail-name" 
                level={4}
              >
                德克士(百里路店)
              </Title>
              <Rate 
                className="detail-rate"
                defaultValue={4.5}
                allowHalf
              />
            </div>
          </div>
          <div className="detail-msg">
            <div className="detail-start">
              <span>起送价</span>
              <strong>20元</strong>
            </div>
            <div className="detail-fee">
              <span>配送费</span>
              <strong>配送费￥1</strong>
            </div>
            <div className="detail-speed">
              <span>平均送达速度</span>
              <strong>30分钟</strong>
            </div>
          </div>
            
          
        </div>
      </div>
    )
  }
}
