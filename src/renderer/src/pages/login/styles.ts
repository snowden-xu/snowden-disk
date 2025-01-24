import { Form } from 'antd';
import { styled } from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
`;

export const LoginBox = styled.div`
  width: 400px;
  padding: 24px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const RegisterFormItem = styled(Form.Item)`
  margin-top: -16px;
`;
