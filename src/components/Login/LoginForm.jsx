import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useMutation } from 'react-query';
import axios from 'axios';
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

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const mutation = useMutation(async () => {
    const response = await axios.post('auth/login', { email, password });
    return response.data;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await mutation.mutateAsync();
      console.log(data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <h1>Croup</h1>
        <Input placeholder="email" type="email" value={email} onChange={handleEmailChange} />
        <Input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
        <RegisterBtnWrapper>
          <span>비밀번호를 잊으셨나요? </span>| 회원가입
        </RegisterBtnWrapper>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
