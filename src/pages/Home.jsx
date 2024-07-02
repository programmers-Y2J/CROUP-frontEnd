import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/Home/HeaderComponent';
import MakeRoomComponent from '../components/Home/MakeRoomComponent';
import RoomList from '../components/Home/RoomListComponent';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  gap: 50px;
  margin: auto;
`;
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeContainer>
      <HeaderComponent />
      <RoomList />
      {isOpen && <MakeRoomComponent openModal={openModal} />}
    </HomeContainer>
  );
}

export default Home;
