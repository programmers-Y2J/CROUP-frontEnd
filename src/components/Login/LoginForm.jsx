import React from 'react';
import { styled } from 'styled-components';
import Input from './Input';

function LoginForm() {
  const LoginFormContainer = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
      color: white;
      background-color: #04314d;
      font-weight: bold;
    }
  `;

  const RegisterBtnWrapper = styled.pre`
    margin-top: 30px; /* 버튼 위에 간격 추가 */
    font-size: 0.6rem;
    font-weight: bold;
    > span {
      color: #00b3ff;
    }
  `;

  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <h1>Croup</h1>
        <Input />
        <Input />
        <button type="submit">Login</button>
        <RegisterBtnWrapper>
          <span>비밀번호를 잊으셨나요? </span>| 회원가입
        </RegisterBtnWrapper>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
