import { styled } from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { usePlayListStore, useRoomDataStore } from '../stores/Room/useAuthStore';

import RoomDetail from '../components/Room/RoomDetail';
import UserContent from '../components/Room/UserContent';
import useRoomQuery from '../hooks/useRoomQuery';

const RoomContainer = styled.div`
  width: 1300px;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

function Room() {
  const { roomId } = useParams();
  const { data, isError, isSuccess } = useRoomQuery(roomId);
  const setPlayList = usePlayListStore((state) => state.setPlayList);
  const setRoomData = useRoomDataStore((state) => state.setRoomData);
  const setRoomMemberCount = useRoomDataStore((state) => state.setRoomMemberCount);
  const location = useLocation();

  const roomDataObj = {
    roomId,
    host: 'sebell' || location.state.host,
    title: 'Room Title' || location.state.roomTitle,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' ||
      location.state.roomDescription,
  };

  if (isError) console.log('get room error');

  if (isSuccess) {
    setPlayList(data.data.playList);
    setRoomData(roomDataObj);
    setRoomMemberCount(data.data.roomMember.length);

    return (
      <RoomContainer>
        <RoomDetail />
        <UserContent chats={data.data.chats} roomMember={data.data.roomMember} />
      </RoomContainer>
    );
  }
}

export default Room;
