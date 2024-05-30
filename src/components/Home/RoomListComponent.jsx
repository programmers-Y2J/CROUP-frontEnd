import styled from 'styled-components';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import RoomComponent from './RoomComponent';
import PlusComponent from './PlusComponent';

const Container = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
`;
const LoadingContainer = styled.div`
  margin-bottom: 50px;
  font-size: 2rem;
`;

const ErrorContainer = styled.div`
  margin-bottom: 50px;
  font-size: 1.5rem;
  color: orange;
`;
const fetchRooms = async () => {
  const response = await axios.get('/list');
  return response.data;
};
function RoomListComponent({ openModal }) {
  const { data: rooms, error, isLoading } = useQuery('rooms', fetchRooms);

  if (isLoading) {
    return <LoadingContainer>로딩 중...</LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer>방 리스트를 불러오는 중 오류가 발생했습니다.</ErrorContainer>;
  }

  return (
    <Container>
      <PlusComponent openModal={openModal} />
      {rooms.map((item) => {
        return (
          <RoomComponent
            roomThumbnail={item.roomThumbnail}
            key={item.roomId}
            roomTitle={item.roomTitle}
            roomDescription={item.roomDescription}
          />
        );
      })}
    </Container>
  );
}

export default RoomListComponent;
