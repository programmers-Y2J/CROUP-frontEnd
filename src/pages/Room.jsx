import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import Questions from '@/components/Room/Question/Questions';
import { useRoomDataStore, usePlayListStore } from '@/stores/Room/useRoomStore';
import RoomDetail from '../components/Room/RoomDetail';
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
  const { data, error, isError, isSuccess } = useRoomQuery(roomId);
  const setPlayList = usePlayListStore((state) => state.setPlayList);
  const setRoomData = useRoomDataStore((state) => state.setRoomData);
  const setRoomMemberCount = useRoomDataStore((state) => state.setRoomMemberCount);

  if (isError) console.log(error);

  if (isSuccess) {
    const roomDataObj = {
      roomId,
      host: data.data.managerId,
      title: data.data.roomTitle || 'Room Title',
      description: data.data.description || 'Lorem ipsum is not special text words in the world react delta jazz',
      tags: data.data.tags,
    };
    setPlayList(data.data.playList);
    setRoomData(roomDataObj);
    setRoomMemberCount(data.data.roomMember.length);

    return (
      <RoomContainer>
        <RoomDetail />
        <Questions />
      </RoomContainer>
    );
  }
}

export default Room;
