import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';
import LeftBar from '../components/Member/LeftBar';

function Login() {
  const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
  `;
  const text = '즐거운 <br /> 집중을 위한 <br /> 준비가 되셨나요 ?';
  return (
    <LoginContainer>
      <LeftBar text={text} />
      <LoginForm />
    </LoginContainer>
  );
}

export default Login;
