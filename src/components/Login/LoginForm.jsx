import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../Member/Input';
import Validtion from '../Member/Validation';

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
    margin-top: 30px;
  }
  > input {
    margin-top: 30px;
  }
`;

const RegisterBtnWrapper = styled.pre`
  margin-top: 30px;
  font-size: 0.6rem;
  font-weight: bold;
  color: #00b3ff;
  > button {
    color: black;
    background-color: none;
    background: none;
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleEmailChange = (e) => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isValid = regex.test(e.target.value);
    setEmailValid(!isValid);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const regex = /.{4,}/;
    const isValid = regex.test(e.target.value);
    setPasswordValid(!isValid);
    setPassword(e.target.value);
  };

  const mutation = useMutation(async () => {
    const response = await axios.post('https://387a-220-125-131-244.ngrok-free.app/auth/login', { email, password });
    return response.data;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (password === '') {
      alert('비밀번호를 입력해주세요');
      return;
    }
    try {
      const data = await mutation.mutateAsync();
      console.log('Logged in successfully:', data);

      localStorage.setItem('token', data.token);
      console.log('Token:', data.token);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <h1>Croup</h1>
        <Input placeholder="email" type="email" value={email} onChange={handleEmailChange} />
        {emailValid ? <Validtion text="이메일 형식으로 입력해주세요" /> : null}
        <Input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
        {passwordValid ? <Validtion text="비밀번호는 최소 4글자 입니다." /> : null}
        <button type="submit" disabled={emailValid || passwordValid}>
          Login
        </button>
        <RegisterBtnWrapper>
          비밀번호를 잊으셨나요? |{' '}
          <button type="button" onClick={handleRegisterClick}>
            회원가입
          </button>
        </RegisterBtnWrapper>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
