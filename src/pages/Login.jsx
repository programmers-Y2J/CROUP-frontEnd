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
  return (
    <LoginContainer>
      <LeftBar />
      <LoginForm />
    </LoginContainer>
  );
}

export default Login;
