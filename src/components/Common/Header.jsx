import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import useAuthStore from '@/stores/Auth/useUserStore';
import useModal from '@/hooks/useModal';
import EditUserInfo from '../Modal/EditUserInfo';
import { Alert2 } from '../Modal/Alert2';

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
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
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

  const handleToggleUser = () => {
    setIsOpen2(!isOpen2);
  };
  const handleToggleEdit = () => {
    setIsOpen3(!isOpen3);
  };
  return (
    <HeaderContainer>
      {isOpen3 && <EditUserInfo handleToggle={handleToggleEdit} />}
      {isOpen && <Alert2 title={alertTitle} message={alertMessage} onClose={close} navi={navi} />}
      <button type="button" onClick={handleClickLogo} className="absolute left-8">
        <h1 className="text-3xl font-extrabold tracking-tight ">Croup</h1>
      </button>

      <button
        onClick={handleToggleUser}
        type="button"
        className="absolute right-8 rounded-3xl font-semibold pl-8 pr-8 pt-3 pb-3"
        aria-label="Toggle user menu">
        <FaUser size={24} />
      </button>
      {isOpen2 && (
        <ul className="absolute top-0 right-0 mt-12 w-40 bg-white text-black shadow-lg rounded-lg z-50">
          <li className="text-center ">
            <button type="button" onClick={handleLoginClick} className="w-full p-2 hover:bg-gray-200 cursor-pointer">
              {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
          </li>
          <li className="text-center border-t">
            <button type="button" onClick={handleToggleEdit} className="w-full p-2 hover:bg-gray-200 cursor-pointer">
              회원정보 변경
            </button>
          </li>
        </ul>
      )}
    </HeaderContainer>
  );
}

export default Header;
