import React from 'react';
import styled from 'styled-components';
import LeftBar from '../components/Member/LeftBar';
import LoginForm from '../components/Login/LoginForm';

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
function Login() {
  const text = '<div>즐거운 <br /> 집중을 위한 <br /> 준비가 되셨나요?</div>';
  return (
    <LoginContainer>
      <LeftBar text={text} />
      <LoginForm />
    </LoginContainer>
  );
}

export default Login;
