import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ui/button';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
  position: relative;
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

  // const handleLoginClick = () => {
  //   navigate('/login');
  // };

  // const handleLogoutClick = () => {
  //   localStorage.removeItem('token');
  //   setIsLoggedIn(false);
  //   alert('로그아웃 했습니다.');
  //   navigate('/');
  // };

  return (
    <HeaderContainer>
      <button type="button" onClick={handleClickLogo} className="absolute left-8">
        <h1 className="text-3xl font-extrabold tracking-tight ">Croup</h1>
      </button>
      <Button variant="black" className=" absolute right-8 rounded-3xl font-semibold pl-8 pr-8 pt-3 pb-3">
        {isLoggedIn ? '로그인' : '로그아웃'}
      </Button>
    </HeaderContainer>
  );
}

export default Header;
