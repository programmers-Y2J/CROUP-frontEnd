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
    color: #cccccc;
    background-color: white;
    font-weight: bold;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const mutation = useMutation(async () => {
    const response = await axios.post('auth/join', { email, password, nickname });
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
        <h1>회원가입</h1>
        <Input placeholder="email" type="email" value={email} onChange={handleEmailChange} />
        <Input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
        <Input placeholder="password Confirm" type="password" />
        <Input placeholder="password Nickname" type="text" value={nickname} onChange={handleNicknameChange} />

        <button type="submit">Sign Up</button>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
