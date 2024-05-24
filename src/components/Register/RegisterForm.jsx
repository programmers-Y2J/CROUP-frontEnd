import React, { useState } from 'react';
import { styled } from 'styled-components';
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
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordCkValid, setpasswordCkValid] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
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

  const handlePasswordCkChange = (e) => {
    const isValid = password === e.target.value;
    setpasswordCkValid(!isValid);
    setPasswordCk(e.target.value);
  };
  const handleNicknameChange = (e) => {
    const regex = /.{2,}/;
    const isValid = regex.test(e.target.value);
    setNicknameValid(!isValid);
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
    if (email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (password === '') {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (passwordCk === '') {
      alert('비밀번호 확인을 입력해주세요');
      return;
    }
    if (nickName === '') {
      alert('닉네임을 입력해주세요');
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
        {emailValid ? <Validtion text="이메일 형식으로 입력해주세요" /> : null}
        <Input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
        {passwordValid ? <Validtion text="비밀번호는 최소 4글자 입니다." /> : null}
        <Input placeholder="password Confirm" type="password" value={passwordCk} onChange={handlePasswordCkChange} />
        {passwordCkValid ? <Validtion text="비밀번호가 일치하지 않습니다." /> : null}
        <Input placeholder="password Nickname" type="text" value={nickName} onChange={handleNicknameChange} />
        {nicknameValid ? <Validtion text="닉네임은 최소 두글자 입니다." /> : null}
        <button type="submit" disabled={emailValid || passwordValid || passwordCkValid || nicknameValid}>
          Sign Up
        </button>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;
