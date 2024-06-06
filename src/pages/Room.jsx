import { styled } from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { usePlayListStore, useRoomDataStore } from '../stores/Room/useRoomStore';

import RoomDetail from '../components/Room/RoomDetail';
import PlayList from '../components/Room/PlayList/PlayList';
import UserContent from '../components/Room/UserContent';
import useRoomQuery from '../hooks/useRoomQuery';

const RoomContainer = styled.div`
  width: 1300px;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.section};
`;

function Room() {
  const { roomId } = useParams();
  const setPlayList = usePlayListStore((state) => state.setPlayList);
  const setRoomData = useRoomDataStore((state) => state.setRoomData);
  const location = useLocation();

  const { data, isSuccess, isError } = useRoomQuery(roomId);

  const roomDataObj = {
    roomId,
    host: 'host' || location.state.host,
    title: 'title' || location.state.title,
    description: 'description' || location.state.description,
  };

  if (isError) console.log('get room error');
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
