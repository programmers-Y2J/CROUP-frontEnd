import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Input from '../Member/Input';
import Validtion from '../Member/Validation';
import useApiRequest from '../../hooks/useApiRequest';

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

function LoginForm() {
  const navigate = useNavigate();
  const { apiRequest } = useApiRequest();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCk, setPasswordCk] = useState('');
  const [nickName, setNickName] = useState('');
  const [errors, setErrors] = useState({});

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

  const mutation = useMutation(
    (data) =>
      apiRequest({
        method: 'post',
        url: '/auth/join',
        data,
      }),
    {
      onSuccess: (data) => {
        console.log(data);
        alert('회원가입에 성공했습니다.');

        navigate('/login');
      },
      onError: (error) => {
        alert('회원가입에 실패했습니다.');
        console.error(error);
      },
    },
  );

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
      await mutation.mutateAsync({
        email,
        password,
        nickName,
      });
    } catch (error) {
      console.error(error);
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
