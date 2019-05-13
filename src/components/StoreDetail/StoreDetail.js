import React, { Component } from 'react'
import './StoreDetail.less'
import { Avatar, Typography, Rate, Row, Col, Button, Icon, InputNumber } from 'antd'

export default class StoreDetail extends Component {

  state = {
   style: {} 
  }

  componentWillMount() {
    this.clearCart();
  }

  componentDidMount() {
    this.props.getStoreDetails();
  }

  openBarket = () => {
    let e = document.getElementsByClassName('shop-cartbarket')[0];
    var style = getComputedStyle(e, null);
    if(style.top === '0px'){
      if(this.props.cart.cart.length > 0) {
        let top = - this.props.cart.cart.length * 46 - 40;
        this.changeBarketTop(top);
      }else {
        this.changeBarketTop(-208);
      }
    }else{
      this.changeBarketTop(0);
    }
  }

  clearCart = () => {
    this.props.clearCart();
    this.forceUpdate();
    this.changeBarketTop(-40);
  }

  gotopay = () => {
    this.props.history.push('/orderdetail');
  }

  changeBarketTop = (top) => {
    this.setState({
      style: {
        top: `${top}px`
      }
    })
  }

  onChange = (value, storeDetail) => {
    storeDetail.number = value;
    this.props.saveCart(storeDetail);
    let top = - this.props.cart.cart.length * 46 - 40;
    this.changeBarketTop(top);
    this.forceUpdate();
  }

  addShop = (storeDetail) => {
    storeDetail.number = 1;
    this.props.saveCart(storeDetail);
    this.forceUpdate();
    let top = - this.props.cart.cart.length * 46 - 40;
    this.changeBarketTop(top);
    console.log(this.props.cart.cart);
    
  }

  goodIsExistIncart(storeDetail) {
    if(this.props.cart.cart.some(item => item.id  === storeDetail.id)) {
      return true;
    }else {
      return false;
    }
  }

  render() {

    const { Title, Text } = Typography;
    const store = this.props.home.store;
    const storeDetails = this.props.storeDetails.storeDetails

    return (
      <div>
        <div className="detail-header">
          <div className="detail-intro">
            <Avatar 
              src={store.storeimg}
              size={80}
              className="detail-avatar"
            />
            <div className="detail-box">
              <Title
                className="detail-name" 
                level={4}
              >
                {store.storename}
              </Title>
              <Rate 
                className="detail-rate"
                defaultValue={store.storerate}
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
              <strong>配送费 ￥ {store.storefee}</strong>
            </div>
            <div className="detail-speed">
              <span>平均送达速度</span>
              <strong>{store.storetime}</strong>
            </div>
          </div>
        </div>
        <div className="detail-goods">
          <Row gutter={10}>
            {storeDetails.map(storeDetail => (
              <Col span={12} key={storeDetail.id}>
                <div className="detail-item">
                  <Avatar 
                    src={storeDetail.menuimg}
                    size={100}
                    shape="square"
                    className="detail-avatar"
                  />
                  <div className="detail-goodbox">
                    <Text className="detail-goodname">
                      {storeDetail.menuname}
                    </Text>
                    <Text className="detail-gooddesc">
                      {storeDetail.menuintro}
                    </Text>
                    <Rate 
                      className="detail-goodrate"
                      defaultValue={storeDetail.menurate}
                      allowHalf
                      disabled
                    />
                    <Text className="detail-goodcount">
                      月售{storeDetail.menucount}份
                    </Text>
                    <Text className="detail-goodprice">
                      ￥{storeDetail.menuprice}
                      {this.goodIsExistIncart(storeDetail) ? (
                        <InputNumber 
                          min={0}
                          onChange={(value) => this.onChange(value, storeDetail)}
                          value={storeDetail.number}
                          style={{float: "right"}}
                        />
                      ) : (
                        <Button 
                          onClick={() => this.addShop(storeDetail)} 
                          type="primary" 
                          shape="round" 
                          size="small" 
                          style={{float: "right"}}
                        >
                          加入购物车
                        </Button>
                      )}              
                    </Text>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="shop-cart">
          
          <div className="shop-cartfooter" onClick={this.openBarket}>
            <Icon 
              type="shopping-cart"
              size={40}
              style={{color: 'white',fontSize: '30px'}}
            />
            {this.props.cart.total > 0 ? (
              <span className="shop-cartfooter-total">￥{this.props.cart.total}</span>
            ) : (
              false
            )}
            <span className="shop-cartfooter-text">
              配送费 ￥ {store.storefee}
            </span>
            {this.props.cart.cart.length > 0 ? (
              <Button 
                onClick={this.gotopay}
                className="shop-cartfooter-gopay"
              >
                去结算
              </Button>
            ) : (
              <Button className="shop-cartfooter-checkout">
                购物车是空的
              </Button>
            )}
            
          </div>
          <div className="shop-cartbarket" style={this.state.style}>
            <div className="shop-cartbarket-header">
              <span>购物车</span>
              <span 
                className="shop-cartbarket-clear"
                onClick={this.clearCart}
              >[清空]</span>
            </div>
            {this.props.cart.cart.length > 0 ? (
              <div>
                {this.props.cart.cart.map(item => (
                  <Row
                    key={item.id} 
                    type="flex"
                    align="middle"
                    className="shop-cartbarket-item">
                    <Col className="shop-cartbarket-item-name" span={10}>
                      {item.menuname}
                    </Col>
                    <Col span={8}>
                      <InputNumber 
                        min={0}
                        onChange={(value) => this.onChange(value, item)}
                        value={item.number}
                      />
                    </Col>
                    <Col className="shop-cartbarket-item-price" span={6}>
                      ￥{item.number * item.menuprice}
                    </Col>
                  </Row>
                ))}
              </div>
            ) : (
              <div className="shop-cartbarket-empty">
                <Icon 
                  type="shopping-cart"
                  size={50}
                  style={{fontSize: '50px'}}
                />
                <p>购物车是空的，赶紧选购吧</p>
              </div>
            )}            
          </div>
        </div>
      </div>
    )
  }
}
