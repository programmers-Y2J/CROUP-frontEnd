import { styled } from 'styled-components';

import PlayList from './PlayList/PlayList';
import UserContent from './UserContent';

const RoomContentContainer = styled.div`
  display: flex;
  gap: 100px;
`;

function RoomContent() {
  return (
    <RoomContentContainer>
      <PlayList />
      <UserContent />
    </RoomContentContainer>
  );
}

export default RoomContent;
