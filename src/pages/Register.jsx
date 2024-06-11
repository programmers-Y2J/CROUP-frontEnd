import React from 'react';
import styled from 'styled-components';
import LeftBar from '../components/Member/LeftBar';
import RegisterForm from '../components/Register/RegisterForm';

const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
function Register() {
  const text = '<div>환영합니다</div><br />거의 다 왔어요<br /><br /> 즐거운 집중까지 마지막 스텝';
  return (
    <RegisterContainer>
      <LeftBar text={text} />
      <RegisterForm />
    </RegisterContainer>
  );
}

export default Register;
