import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { RxEnter } from 'react-icons/rx';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';

const Container = styled.div`
  width: 30%;
  margin: 16px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  height: 70vh;
  > img {
    max-width: 100%;
    width: 100%;
    max-height: 70%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const StyledBsFileEarmarkMusicFill = styled(BsFileEarmarkMusicFill)`
  max-width: 100%;
  width: 100%;
  max-height: 40%;
  font-size: 150px;
  margin-top: 20px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const StyledCircle = styled(RiCheckboxBlankCircleFill)`
  font-size: 2.5rem;
  color: #d1d1d1;
  margin-right: 15px;
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
        <div>
          <StyledCircle />
          <div>
            {roomTitle}
            <br />
            <span>{roomDescription}</span>
          </div>
        </div>
        <Description>{description}</Description>
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
