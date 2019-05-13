import React, { Component } from 'react'
import './OrderDetail.less'
import { 
  Steps, 
  Icon, 
  Row, 
  Col, 
  Card, 
  InputNumber, 
  message 
} from 'antd';

export default class OrderDetail extends Component {


  state = {
    selectStyle: {
      borderColor: '#1890ff',
      background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA9lBMVEUAAAAeieAeieAeieAeieAeieAeieAeieAeieAeieAeieAeieAhi+ANgN4Hfd0giuAfieAEe9w4luNMoeYKf90dieAdiOAAedwbiODm8vv///9Jn+YIfd0hi+ERg94BetwXhd8bh+Db7Prk8fszlOMNgN0Rgt4/muSFv+4Sg9/c7PrZ6/oZht8EfNwYhuDQ5vin0fMAeNwRgd4Cetzc7foYht8ciOAOgd5bqej+/v+p0vMAb9kSgt/d7frY6voeiuAAdNpHn+X9/v6izvLI4/jX6vpHnuX8/f7W6voWhd9In+Xi8PtPo+c0leMFe90Gfd0OgN4AAABS6aalAAAAC3RSTlMAdI6A/PDykHP35u7NkAkAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAABBElEQVQ4y4XR2VrCMBAF4GoFhIk2ClIdQFBEZREFZXFlcWFR0Pd/GtsG0jakyVz/XyZzjmHoZksrtkEnTNjRCohpBcS1Qk08oSRMqMhKKMhaRBMuIokvokhARJCgkJOQkJKwkBEuyN6+RWXEFweH6YwlISYcZZmwj08wl98kJhROiyXiirNzLF9UNoiz5fLqulopOG/UsN64ISJxRDN/i3et9n32Aesdm4gXuT/t9vqP+PT88opvTISIdwsdDEdjfP/AzxITQbK6lsLwa4I4nRWJGB3PwzFz/ObCJ4HUKdg/iyURCwj1Qq3fPy7WRGhOUqNKMKIUHlELlyRAM8YuJOPKSf0D2NEjZKfWInYAAAAASUVORK5CYII=) right bottom no-repeat'
    },
    style: {},
    selectIndex: 0
  }

  selectAddress = (index) => {
    this.setState({
      selectIndex: index
    })
  }

  onConfirm = () => {
    if(this.props.cart.cart.length === 0) {
      message.error('请添加商品后再确认下单！');
    }else if(this.props.address.addresses.length === 0) {
      message.error('请添加收货地址！');
    }else {
      let order = {};
      order.storeimg = this.props.home.store.storeimg;
      order.time = new Date();
      order.paid = this.props.home.store.storefee + this.props.cart.total;
      let menuname = "";
      for(let i of this.props.cart.cart) {
        menuname += i.menuname + ' ';
      }
      order.menuname = menuname;
      this.props.saveOrder(order);
      this.props.history.push('/pay');
    }
  }

  onChange = (value, storeDetail) => {
    storeDetail.number = value;
    this.props.saveCart(storeDetail);
    this.forceUpdate();
  }

  totalNumber = () => {
    let number = 0;
    this.props.cart.cart.map(item => number += item.number);
    return number;
  }

  render() {

    const store = this.props.home.store;
    const Step = Steps.Step;

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
              <Row>
                <Col span={10}>
                  商品
                </Col>
                <Col span={6}>
                  份数
                </Col>
                <Col span={8}>
                  小计（元）
                </Col>
              </Row>
              {this.props.cart.cart.map(item => (
                <Row
                  key={item.id} 
                  type="flex"
                  align="middle"
                  className="order-item">
                  <Col className="shop-cartbarket-item-name" span={10}>
                    {item.menuname}
                  </Col>
                  <Col span={6}>
                    <InputNumber 
                      min={0}
                      onChange={(value) => this.onChange(value, item)}
                      value={item.number}
                      style={{width: '100%'}}
                    />
                  </Col>
                  <Col style={{textAlign: 'right'}} span={8}>
                    ￥{item.number * item.menuprice}
                  </Col>
                </Row>
              ))}
              <p className="order-fee-box">
                配送费 ￥ {store.storefee}
              </p>
              <p className="order-total-fee">
                <span className="order-total-sign">￥</span>
                <span className="order-total-number">{this.props.cart.total + store.storefee}</span>
              </p>
              <p className="order-total-goods">共{this.totalNumber()}份商品</p>
            </Card>
          </Col>
          <Col span={16}>
            <Card
              title="收货地址"
              style={{ width: '100%' }}
            >
              {this.props.address.addresses.map((address, index) => (
                <div 
                  className="address-box" 
                  key={address.id}
                  onClick={() => this.selectAddress(index)}
                  id={'address-box' + index}
                  style={index === this.state.selectIndex ? this.state.selectStyle : this.state.style}
                >
                  <Icon 
                    type="environment"
                    className="address-img"
                  />
                  <div className="address-info">
                    <span className="address-name">{address.name}</span>
                    <span className="address-name">{address.sex}</span>
                    <span>{address.phone}</span>
                    <span className="address">{address.place}</span>
                  </div>
                </div>
              ))}
              
              <button className="check-order" onClick={this.onConfirm}>确认下单</button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
