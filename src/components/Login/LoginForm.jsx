import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Input from '../Member/Input';
import Validtion from '../Member/Validation';
import useApiRequest from '../../hooks/useApiRequest';

const LoginFormContainer = styled.div`
  margin-left: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormWrapper = styled.form`
  text-align: center;
  > p {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  > button {
    width: 100px;
    height: 25px;
    border-radius: 80px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-top: ${({ theme }) => theme.spacing.large};
  }
  > input {
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;

const RegisterBtnWrapper = styled.pre`
  margin-top: ${({ theme }) => theme.spacing.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.primary};
  font-size: 10px;
  > button {
    cursor: pointer;
    background-color: none;
    background: none;
    font-size: 10px;
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
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

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const { apiRequest } = useApiRequest();

  const mutation = useMutation(
    (data) =>
      apiRequest({
        method: 'post',
        url: '/auth/login',
        data,
      }),
    {
      onSuccess: (data) => {
        console.log('Logged in successfully:', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('nickName', data.nickName);
        console.log('Token:', data.token);
        alert('로그인에 성공했습니다.');
        navigate('/');
      },
      onError: (error) => {
        alert('로그인에 실패했습니다.');
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      await mutation.mutateAsync({
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <p>Croup</p>
        <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <Validtion text={errors.email} />}
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <Validtion text={errors.password} />}
        <button type="submit">LogIn</button>
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
