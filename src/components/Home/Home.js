import React, { Component } from 'react'
import { List, Row, Col } from 'antd'
import StoreItem from '../StoreItem/StroeItem'
import './Home.less'
import { withRouter } from 'react-router-dom'

class Home extends Component {

  componentDidMount() {
    this.props.getStores();
    console.log(this.props);
    
  }

  goToDetail = (store) => {
    this.props.history.push('/store');
    this.props.saveStore(store);
  }

  render() {

    const storeGird = {
      xs: {span: 12},
      sm: {span: 12},
      md: {span: 8},
      lg: {span: 6}
    }

    const { stores } = this.props.home;

    
    return (
      <div >
        <List 
          className="store-list"
          bordered
        >
          <Row>
            {stores.map((store, index) => (
              <Col 
                key={index} 
                xs={storeGird.xs}  
                sm={storeGird.sm} 
                md={storeGird.md} 
                lg={storeGird.lg} 
                onClick={() => this.goToDetail(store)}
              >
                <StoreItem 
                  store={store}
                />
              </Col>
            ))}
          </Row>
        </List>
      </div>
    )
  }
}

export default withRouter(Home)