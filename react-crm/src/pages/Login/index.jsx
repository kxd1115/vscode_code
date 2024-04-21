import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  // 登录后跳转首页，这里应该还需要保存token，并验证登录用户，目前还有完成后端，这里先直接跳转
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/');
    message.success("登录成功");
    // 获取token，并存在本地
  };

  return (
    <div className='login-container'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className='login-title'>Login</div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入你的账号!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入你的密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>自动登录</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            忘记密码？
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;