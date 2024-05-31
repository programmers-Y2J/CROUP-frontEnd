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
    font-size: 0.55rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const validateEmail = (inputEmail) => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regex.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    const regex = /.{4,}/;
    return regex.test(inputPassword);
  };

  const mutation = useMutation(async () => {
    const response = await axios.post('https://387a-220-125-131-244.ngrok-free.app/auth/login', { email, password });
    return response.data;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = '이메일 형식으로 입력해주세요';
    }
    if (!validatePassword(password)) {
      newErrors.password = '비밀번호는 최소 4글자 입니다.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const data = await mutation.mutateAsync();
      console.log('Logged in successfully:', data);
      localStorage.setItem('token', data.token);
      console.log('Token:', data.token);
      navigate('/');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <h1>Croup</h1>
        <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <Validtion text={errors.email} />}
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <Validtion text={errors.password} />}
        <button type="submit">Login</button>
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
