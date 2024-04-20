import React from "react";
import { Button, Checkbox, Form, Input, Card, message } from 'antd';
import './index.scss';

const onFinish = (values) => {
  console.log('Success:', values);
}
const onFinishField = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = ()=> {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600}}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishField}
          autoComplete="off"
          // layout="vertical"
        >
          <Form.Item
            label='username'
            name='username'
            rules={[
              { 
                required: true, 
                message: '请输入账号!' 
              }
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label='password'
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码!',
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item
            name='remmember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
          
        </Form>
      </Card>
    </div>
  )
};

export default Login;