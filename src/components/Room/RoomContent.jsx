import { styled } from 'styled-components';

import PlayList from './PlayList/PlayList';
import UserContent from './UserContent';

const RoomContentContainer = styled.div`
  display: flex;
  gap: 100px;
`;

function RoomContent({ chats, roomMember }) {
  return (
    <RoomContentContainer>
      <PlayList />
      <UserContent chats={chats} roomMember={roomMember} />
    </RoomContentContainer>
  );
}

export default RoomContent;
