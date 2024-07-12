import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ui/button';
import useAuthStore from '@/stores/Auth/useUserStore';
import useModal from '@/hooks/useModal';
import { Alert2 } from '../Modal/alert2';

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
  const { isOpen, open, close } = useModal();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [navi, setNavi] = useState('');

  const clearAuth = useAuthStore((state) => state.clear);

  const handleLogout = () => {
    clearAuth();
  };
  useEffect(() => {
    checkToken();
  }, [isLoggedIn, navigate, checkToken]);

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      handleLogout();
      setAlertMessage('로그아웃 했습니다.');
      setAlertTitle('Success!');
      setNavi('/login');
      open();
    } else if (!isLoggedIn) {
      navigate('/login');
    }
  };

  return (
    <HeaderContainer>
      {isOpen && <Alert2 title={alertTitle} message={alertMessage} onClose={close} navi={navi} />}
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
