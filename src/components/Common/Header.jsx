import { styled } from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ui/button';
import useAuthStore from '@/stores/Auth/useUserStore';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
  position: relative;
`;

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, checkToken } = useAuthStore();

  useEffect(() => {
    checkToken();
  }, [isLoggedIn, navigate, checkToken]);

  const handleClickLogo = () => {
    navigate('/');
  };


  const handleLoginClick = () => {
    if (isLoggedIn) {
      alert('로그아웃 되었습니다.');
      useAuthStore.getState().setToken(null);
      navigate('/login');
    }
    if (!isLoggedIn) {
      navigate('/login');
    }
  };


  return (
    <HeaderContainer>
      <button type="button" onClick={handleClickLogo} className="absolute left-8">
        <h1 className="text-3xl font-extrabold tracking-tight ">Croup</h1>
      </button>
      <Button
        onClick={handleLoginClick}
        variant="black"
        className=" absolute right-8 rounded-3xl font-semibold pl-8 pr-8 pt-3 pb-3">
        {isLoggedIn ? '로그아웃' : '로그인'}
      </Button>
    </HeaderContainer>
  );
}

export default Header;
