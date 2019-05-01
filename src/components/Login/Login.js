import React, { Component } from 'react'
import './Login.less'
import login from '@/assets/ele-login.png'
import {
  Form, 
  Icon, 
  Input, 
  Button, 
} from 'antd';


class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '用户名' }],
          })(
            <Input 
              prefix={<Icon type="user" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} 
              placeholder="用户名"
              className="login-form-input" 
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码' }],
          })(
            <Input 
              prefix={<Icon type="lock" 
              style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="password" placeholder="密码" 
              className="login-form-input"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button 
            block
            htmlType="submit" 
            className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginForm);

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <img 
          src={login}
          alt="暂无图片"
          className="login-img"
        />
        <WrappedNormalLoginForm className="login-form"/>
      </div>
    )
  }
}