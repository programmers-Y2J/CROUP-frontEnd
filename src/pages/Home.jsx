import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/Home/HeaderComponent';
import RoomListComponent from '../components/Home/RoomListComponent';
import MakeRoomComponent from '../components/Home/MakeRoomComponent';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

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
      <RoomListComponent openModal={openModal} />
      {isOpen && <MakeRoomComponent openModal={openModal} />}
    </HomeContainer>
  );
}

export default Home;
