import React from 'react';
import styled from 'styled-components';
import { RxEnter } from 'react-icons/rx';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

const Container = styled.div`
  width: 30%;
  margin: 16px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  height: 70vh;
  > img {
    max-width: 100%;
    width: 100%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

const RoomWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
`;

const StyledRxEnter = styled(RxEnter)`
  font-size: 2rem;
  color: #d1d1d1;
`;

const StyledCircle = styled(RiCheckboxBlankCircleFill)`
  font-size: 2.5rem;
  color: #d1d1d1;
`;

function RoomComponent({ roomTitle, roomDescription, roomThumbnail }) {
  return (
    <Container>
      <img src={roomThumbnail} alt="음악포스터" />
      <RoomWrapper>
        <div>
          <StyledCircle />
          <div>
            {roomTitle}
            <br />
            <span>{roomDescription}</span>
          </div>
        </div>
        <StyledRxEnter />
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
