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
`;

const LogoButton = styled.button`
  background: none;
  position: absolute;
  left: 5%;
  > h1 {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
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
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkToken();
    const interval = setInterval(checkToken, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClickLogo = () => {
    navigate('/');
  };

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
      <LogoButton onClick={handleClickLogo}>
        <h1>Croup</h1>
      </LogoButton>

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
