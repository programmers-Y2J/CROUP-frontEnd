import React from 'react';
import { styled } from 'styled-components';
import Input from '../Member/Input';

const LoginFormContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`;

const LoginFormWrapper = styled.form`
  text-align: center;
  > h1 {
    text-align: left;
  }
  > button {
    width: 85px;
    height: 35px;
    border-radius: 30px;
    color: #cccccc;
    background-color: white;
    font-weight: bold;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;
function LoginForm() {
  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <h1>회원가입</h1>
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Input placeholder="password Confirm" type="password" />
        <Input placeholder="password Nickname" type="text" />

        <button type="submit">Sign Up</button>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
