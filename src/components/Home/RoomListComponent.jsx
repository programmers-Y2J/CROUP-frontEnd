import styled from 'styled-components';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import RoomComponent from './RoomComponent';
import PlusComponent from './PlusComponent';
import useApiRequest from '../../hooks/useApiRequest';

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  const navigate = useNavigate();
  const { data, error } = useQuery('rooms', () => fetchRooms(apiRequest));
  const rooms = Array.isArray(data) ? data : [];

  if (error) {
    navigate('/login');
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
