import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';

const HeaderContainer = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
`;
const HighWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 10px;
  > button {
    width: 85px;
    height: 30px;
    border-radius: 30px;
    color: white;
    background-color: #04314d;
    font-weight: bold;
    border: 1px solid white;
    margin-right: 40px;
    cursor: pointer;
  }
`;
const MiddleWrapper = styled.div`
  pointer-events: none;
  border-radius: 30px;
  background-color: #00b3ff;
  height: 40vh;
  display: flex;
  > div:nth-child(1) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      font-size: 0.8rem;
    }
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 50%;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg);
    font-size: 5rem;
    font-weight: 700;
    padding-left: 40px;
    color: white;
    opacity: 0.6;
  }
`;
const LowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
`;

function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [useNavigate]);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const mutation = useMutation(async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  });
  const handleLogoutClick = async () => {
    try {
      await mutation.mutateAsync();
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      alert('로그아웃 했습니다.');
      navigate('/login');
    } catch (error) {
      alert('로그아웃에 실패했습니다.');
      console.error('Logout failed:', error);
    }
  };
  return (
    <HeaderContainer>
      <HighWrapper>
        {isLoggedIn ? (
          <button type="button" onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={handleLoginClick}>
            Login
          </button>
        )}
      </HighWrapper>
      <MiddleWrapper>
        <div>
          <p>
            <h1>
              집중을 위한 공간을 만나는 <br />
              최고의 방법
            </h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </p>
        </div>
        <div>Croup</div>
      </MiddleWrapper>
      <LowWrapper>
        <h2>오늘 하루 즐거운 집중을 찾아보세요.</h2>
      </LowWrapper>
    </HeaderContainer>
  );
}

export default HeaderComponent;
