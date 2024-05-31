import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { usePlayListStore, useRoomDataStore } from '../stores/Room/useRoomStore';

import RoomDetail from '../components/Room/RoomDetail';
import RoomContent from '../components/Room/RoomContent';

const RoomContainer = styled.div`
  width: 1300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const getRoomData = async () => {
  const result = await axios.get('/dummy/dummyRoomData.json'); // axios로 수정 필요
  return result;
};

function Room() {
  const { roomId } = useParams();
  const setPlayList = usePlayListStore((state) => state.setPlayList);
  const setRoomData = useRoomDataStore((state) => state.setRoomData);
  const location = useLocation();

  const { data, isSuccess, isError } = useQuery({
    queryKey: [`room`],
    queryFn: () => getRoomData(),
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
        <RoomContent chats={data.data.chats} roomMember={data.data.roomMember} />
        <Outlet />
      </RoomContainer>
    );
  }
}

export default Room;
