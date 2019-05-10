import React, { Component } from 'react'
import SiderBar from '../Layout/SiderBar/SiderBar'
import './Address.less'
import { Card, Row, Col, Icon, Modal, Form, Input, Radio, Popconfirm } from 'antd';


export default class Address extends Component {

  state = {
    visible: false,
    isEdit: false,
    editId: 0,
    address: {}
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    this.props.getAddresses();
  }

  onDelete = (id) => {
    this.props.deleteAddress(id)
  }

  onEdit = (address) => {
    this.setState({
      visible: true,
      isEdit: true,
      address: address
    })
  }

  onAdd = () => {
    this.setState({
      visible: true,
      isEdit: false,
      address: {}
    })
  }

  handleCancel = () => {
    this.formRef.props.form.resetFields();
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      if(this.state.isEdit) {
        values.id = this.state.address.id;
        this.props.putAddress(values);
      }else {
        this.props.postAddress(values);
      }
      form.resetFields();     
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }




  render() {

    const { addresses } = this.props.address; 
    return (
      <div className="address">
        <SiderBar />
        <Card
          title="地址管理"
          className="address-card"
        >
          <Row gutter={10}>
            {addresses.map(address => (
              <Col key={address.id} xs={12} sm={12} md={12} lg={8} style={{marginTop: '10px'}}>
                <Card className="address-item">
                  <div>
                    <p>
                      <span className="address-name">
                        {address.name}
                      </span>
                      <span className="address-sex">
                        {address.sex}
                      </span>
                      <span className="address-operate">
                        <span className="address-edit" onClick={() => this.onEdit(address)}>
                          修改
                        </span>
                        <Popconfirm 
                          title="确认删除?"
                          okText="确定"
                          cancelText="取消"
                          onConfirm={() => this.onDelete(address.id)}
                        >
                          <span>
                            删除
                          </span>
                        </Popconfirm>
                      </span>
                    </p>
                    <span className="address-place">
                      {address.place}
                    </span>
                    <span className="address-phone">
                      {address.phone}
                    </span>
                  </div>
                </Card>
              </Col>
            ))}
            
            <Col xs={12} sm={12} md={12} lg={8} style={{marginTop: '10px'}}>
              <Card className="address-add" onClick={this.onAdd}>
                <Icon type="plus" />
                添加新地址
              </Card>
            </Col>            
          </Row>
        </Card>
        <AddOrEditAddressForm 
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleCreate}
          formData={this.state.address}
        />
      </div>
    )
  }
}


const AddOrEditAddressForm = Form.create(
  { name: 'form_in_modal',
    mapPropsToFields(props) {
      return { 
        name: Form.createFormField({
          value: props.formData.name,
        }),
        sex: Form.createFormField({
          value: props.formData.sex,
        }),
        place: Form.createFormField({
          value: props.formData.place,
        }),
        phone: Form.createFormField({
          value: props.formData.phone,
        }),
      }
    }
  })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible, onCancel, onOk, form,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          title="编辑地址"
          visible={visible}
          onOk={onOk}
          onCancel={onCancel}
          okText="保存"
          cancelText="取消"
        >
          <Form layout="vertical">
            <Form.Item label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名!' }],
              })(
                <Input placeholder="姓名" />
              )}
            </Form.Item>
            <Form.Item label="性别">
              {getFieldDecorator('sex', )(
                <Radio.Group>
                  <Radio value="先生">先生</Radio>
                  <Radio value="女士">女士</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="详细位置">
              {getFieldDecorator('place', {
                rules: [{ required: true, message: '请输入详细位置!' }],
              })(<Input placeholder="详细位置" />)}
            </Form.Item>
            <Form.Item label="手机号">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(<Input placeholder="手机号" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);