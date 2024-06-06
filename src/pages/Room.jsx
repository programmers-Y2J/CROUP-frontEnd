import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useLocation, useParams } from 'react-router-dom';
import { usePlayListStore, useRoomDataStore } from '../stores/Room/useRoomStore';

import RoomDetail from '../components/Room/RoomDetail';
import PlayList from '../components/Room/PlayList/PlayList';
import UserContent from '../components/Room/UserContent';

const RoomContainer = styled.div`
  width: 1300px;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.section};
`;

const getRoomData = async () => {
  const result = await axios.get('/dummy/dummyRoomData.json');
  // const result = await axios.get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}`);
  return result;
};

function Room() {
  const { roomId } = useParams();
  const setPlayList = usePlayListStore((state) => state.setPlayList);
  const setRoomData = useRoomDataStore((state) => state.setRoomData);
  const location = useLocation();

  const { data, isSuccess, isError } = useQuery({
    queryKey: [`room`],
    queryFn: () => getRoomData(roomId),
    staleTime: Infinity,
  });

  const roomDataObj = {
    roomId,
    host: 'host' || location.state.host,
    title: 'title' || location.state.title,
    description: 'description' || location.state.description,
  };

  if (isError) console.log('get playlist error');
  if (isSuccess) {
    setPlayList(data.data.playList);
    setRoomData(roomDataObj);

    return (
      <RoomContainer>
        <RoomDetail />
        <PlayList />
        <UserContent chats={data.data.chats} roomMember={data.data.roomMember} />
      </RoomContainer>
    );
  }
}

export default Room;
