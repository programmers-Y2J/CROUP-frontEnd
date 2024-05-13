import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Register/RegisterForm';
import LeftBar from '../components/Member/LeftBar';

function Register() {
  const RegisterContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
  `;
  const text = '<div>환영합니다</div><br />거의 다 왔어요<br /> 즐거운 집중까지 마지막 스텝';
  return (
    <RegisterContainer>
      <LeftBar text={text} />
      <LoginForm />
    </RegisterContainer>
  );
}

export default Register;
