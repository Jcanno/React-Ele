import React, { Component } from 'react'
import './StoreDetail.less'
import { Avatar, Typography, Rate, Row, Col, Button, Icon } from 'antd'
import store from '@/assets/store.jpg'

export default class StoreDetail extends Component {

  state = {
   style: {} 
  }

  openBarket = () => {
    let e = document.getElementsByClassName('shop-cartbarket')[0];
    var style = getComputedStyle(e, null);
    console.log(style.top);
    
    if(style.top === '0px'){
      this.setState({
        style: {
          top: '-208px'
        }
      })
    }else{
      this.setState({
        style: {
          top: '0px'
        }
      })
    }
  }

  addShop = () => {
    let top = parseInt(this.state.style.top) - 46;
    
    this.setState({
      style: {
        top: `${top}px`
      }
    })
  }

  render() {

    const { Title, Text } = Typography;

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
                disabled
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
        <div className="detail-goods">

          <Row gutter={10}>
            <Col span={12}>
              <div className="detail-item">
                <Avatar 
                  src={store}
                  size={100}
                  shape="square"
                  className="detail-avatar"
                />
                <div className="detail-goodbox">
                  <Text className="detail-goodname">
                    咖喱鸡烩饭+水果沙拉
                  </Text>
                  <Text className="detail-gooddesc">
                    主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊
                  </Text>
                  <Rate 
                    className="detail-goodrate"
                    defaultValue={4.5}
                    allowHalf
                    disabled
                  />
                  <Text className="detail-goodcount">
                    月售2份
                  </Text>
                  <Text className="detail-goodprice">
                    ￥66
                    <Button onClick={this.addShop} type="primary" shape="round" size="small" style={{float: "right"}}>
                      加入购物车
                    </Button>
                  </Text>
                  
                </div>
              </div>
            </Col>

            <Col span={12}>
              <div className="detail-item">
                <Avatar 
                  src={store}
                  size={100}
                  shape="square"
                  className="detail-avatar"
                />
                <div className="detail-goodbox">
                  <Text className="detail-goodname">
                    咖喱鸡烩饭+水果沙拉
                  </Text>
                  <Text className="detail-gooddesc">
                    主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊
                  </Text>
                  <Rate 
                    className="detail-goodrate"
                    defaultValue={4.5}
                    allowHalf
                    disabled
                  />
                  <Text className="detail-goodcount">
                    月售2份
                  </Text>
                  <Text className="detail-goodprice">
                    ￥66
                    <Button type="primary" shape="round" size="small" style={{float: "right"}}>
                      加入购物车
                    </Button>
                  </Text>
                  
                </div>
              </div>
            </Col>

            <Col span={12}>
              <div className="detail-item">
                <Avatar 
                  src={store}
                  size={100}
                  shape="square"
                  className="detail-avatar"
                />
                <div className="detail-goodbox">
                  <Text className="detail-goodname">
                    咖喱鸡烩饭+水果沙拉
                  </Text>
                  <Text className="detail-gooddesc">
                    主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊
                  </Text>
                  <Rate 
                    className="detail-goodrate"
                    defaultValue={4.5}
                    allowHalf
                    disabled
                  />
                  <Text className="detail-goodcount">
                    月售2份
                  </Text>
                  <Text className="detail-goodprice">
                    ￥66
                    <Button type="primary" shape="round" size="small" style={{float: "right"}}>
                      加入购物车
                    </Button>
                  </Text>
                  
                </div>
              </div>
            </Col>

            <Col span={12}>
              <div className="detail-item">
                <Avatar 
                  src={store}
                  size={100}
                  shape="square"
                  className="detail-avatar"
                />
                <div className="detail-goodbox">
                  <Text className="detail-goodname">
                    咖喱鸡烩饭+水果沙拉
                  </Text>
                  <Text className="detail-gooddesc">
                    主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊主要原料: 墨鱼, 蛤蜊
                  </Text>
                  <Rate 
                    className="detail-goodrate"
                    defaultValue={4.5}
                    allowHalf
                    disabled
                  />
                  <Text className="detail-goodcount">
                    月售2份
                  </Text>
                  <Text className="detail-goodprice">
                    ￥66
                    <Button type="primary" shape="round" size="small" style={{float: "right"}}>
                      加入购物车
                    </Button>
                  </Text>                 
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="shop-cart">
          
          <div className="shop-cartfooter" onClick={this.openBarket}>
            <Icon 
              type="shopping-cart"
              size={40}
              style={{color: 'white',fontSize: '30px'}}
            />
            <span className="shop-cartfooter-text">
              配送费￥1
            </span>
            <Button className="shop-cartfooter-checkout">
              购物车是空的
            </Button>
          </div>
          <div className="shop-cartbarket" style={this.state.style}>
            <div className="shop-cartbarket-header">
              <span>购物车</span>
              <span className="shop-cartbarket-clear">[清空]</span>
            </div>
            <div className="shop-cartbarket-empty">
              <Icon 
                type="shopping-cart"
                size={50}
                style={{fontSize: '50px'}}
              />
              <p>购物车是空的，赶紧选购吧</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}