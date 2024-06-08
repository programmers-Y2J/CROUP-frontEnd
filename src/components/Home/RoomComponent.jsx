import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { RxEnter } from 'react-icons/rx';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

const Container = styled.div`
  width: 30%;
  margin: 16px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  height: 500px;
  > img {
    width: 100%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

const RoomWrapper = styled.div`
  padding: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 8px;
  }
`;

const StyledRiCheckboxBlankCircleFill = styled(RiCheckboxBlankCircleFill)`
  font-size: 45px;
  color: #d9d9d9;
`;

const StyledRxEnter = styled(RxEnter)`
  font-size: 45px;
  color: #d9d9d9;
`;

const postRoomData = async ({ roomId, token }) => {
  const response = await axios.post(`/rooms/in/${roomId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

function RoomComponent({ roomTitle, roomDescription, roomThumbnail, roomId }) {
  const navigate = useNavigate();
  const mutation = useMutation(postRoomData, {
    onSuccess: (data) => {
      console.log('POST 요청 성공:', data);
      navigate(`/room/${roomId}`, {
        state: {
          roomTitle,
          roomDescription,
          roomThumbnail,
        },
      });
    },
    onError: (error) => {
      console.error('POST 요청 실패:', error);
    },
  });
  const enterRoom = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mutation.mutate({ roomId, token });
    } else {
      console.error('토큰이 없습니다.');
    }
  };

  return (
    <Container onClick={enterRoom}>
      <img src={roomThumbnail} alt="음악포스터" />
      <RoomWrapper>
        <TitleDescriptionWrapper>
          <StyledRiCheckboxBlankCircleFill />
          <div>
            <h2>{roomTitle}</h2>
            {roomDescription}
          </div>
        </TitleDescriptionWrapper>

        <StyledRxEnter />
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
