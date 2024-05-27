import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import axios from 'axios';
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
    color: #cccccc;
    background-color: white;
    font-weight: bold;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-top: 10px;
  }
  > input {
    margin-top: 30px;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCk, setPasswordCk] = useState('');
  const [nickName, setNickName] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (inputEmail) => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regex.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    const regex = /.{4,}/;
    return regex.test(inputPassword);
  };

  const validatePasswordCk = (inputPassword, inputPasswordCk) => {
    return inputPassword === inputPasswordCk;
  };

  const validateNickName = (inputNickName) => {
    const regex = /.{2,}/;
    return regex.test(inputNickName);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCkChange = (e) => {
    setPasswordCk(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickName(e.target.value);
  };

  const mutation = useMutation(async () => {
    const response = await axios.post(
      'https://387a-220-125-131-244.ngrok-free.app/auth/join',
      {
        email,
        password,
        nickName,
      },
      {
        headers: { 'ngrok-skip-browser-warning': true },
      },
    );
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
    if (!validatePasswordCk(password, passwordCk)) {
      newErrors.passwordCk = '비밀번호가 일치하지 않습니다.';
    }
    if (!validateNickName(nickName)) {
      newErrors.nickName = '닉네임은 최소 두글자 입니다.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

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
        <h1>회원가입</h1>
        <Input placeholder="email" type="email" value={email} onChange={handleEmailChange} />
        {errors.email && <Validtion text={errors.email} />}
        <Input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
        {errors.password && <Validtion text={errors.password} />}
        <Input placeholder="password Confirm" type="password" value={passwordCk} onChange={handlePasswordCkChange} />
        {errors.passwordCk && <Validtion text={errors.passwordCk} />}
        <Input placeholder="Nickname" type="text" value={nickName} onChange={handleNicknameChange} />
        {errors.nickName && <Validtion text={errors.nickName} />}
        <button type="submit">Sign Up</button>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
