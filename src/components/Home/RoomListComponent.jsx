import styled from 'styled-components';
import React from 'react';
import { useQuery } from 'react-query';
import RoomComponent from './RoomComponent';
import PlusComponent from './PlusComponent';
import useApiRequest from '../../hooks/useApiRequest';

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: center;
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
const fetchRooms = async (apiRequest) => {
  const response = await apiRequest({
    method: 'GET',
    url: '/rooms',
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  return response.rooms;
};
function RoomListComponent({ openModal }) {
  const { apiRequest } = useApiRequest();

  const { data, error, isLoading } = useQuery('rooms', () => fetchRooms(apiRequest));
  const rooms = Array.isArray(data) ? data : [];
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
            roomId={item.roomId}
          />
        );
      })}
    </Container>
  );
}

export default RoomListComponent;
