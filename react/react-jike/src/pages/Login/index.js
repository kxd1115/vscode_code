import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png';
import { fetchLogin } from '@/store/modules';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log('Sucess:', values);
    // 触发异步action fetchLogin
    await dispatch(fetchLogin(values));
    // 1. 跳转到首页
    navigate('/');
    // 2. 提示用户登录成功
    // ant-design组件提供的方法mmessage
    message.success('登录成功');
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        {/* 失焦时提示 */}
        <Form validateTrigger='onBlur' onFinish={onFinish}>
          <Form.Item
            name='mobile'
            rules={[
              // 多条校验逻辑，按顺序依次校验，且多条件必须都通过
              {
                required: true,
                message: '请输入手机号!'
              },
              {
                pattern: /^1[3-9]\d{9}$/, // 验证手机号是否正确
                message: '请输入正确的手机号!'
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              {
                required: true,
                message: '请输入验证码!'
                // 这里测试只能使用246810
              }
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login