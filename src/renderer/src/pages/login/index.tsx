import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginBox,
  LoginContainer,
  LoginTitle,
  RegisterFormItem,
} from './styles';

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<LoginForm>();

  const onFinish = (values: LoginForm) => {
    // TODO: 实现实际的登录逻辑
    if (values.username === 'admin' && values.password === 'admin') {
      message.success('登录成功');
      navigate('/home');
    } else {
      message.error('用户名或密码错误');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>Snowden Disk</LoginTitle>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
          <RegisterFormItem>
            <Button block onClick={() => navigate('/register')}>
              注册
            </Button>
          </RegisterFormItem>
        </Form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
