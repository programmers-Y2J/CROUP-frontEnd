import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
  position: relative;
  > h1 {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    position: absolute;
    left: 5%;
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: 5%;
  width: 100px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  border-radius: 20px;
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert('로그아웃 했습니다.');
    navigate('/login');
  };
  return (
    <HeaderContainer>
      <h1>Croup</h1>
      {isLoggedIn ? (
        <LoginButton type="button" onClick={handleLogoutClick}>
          Logout
        </LoginButton>
      ) : (
        <LoginButton type="button" onClick={handleLoginClick}>
          LogIn
        </LoginButton>
      )}
    </HeaderContainer>
  );
}

export default Header;
