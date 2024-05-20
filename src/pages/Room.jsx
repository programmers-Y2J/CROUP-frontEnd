import { styled } from 'styled-components';

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

function Room() {
  return (
    <RoomContainer>
      <RoomDetail />
      <RoomContent />
    </RoomContainer>
  );
}

export default Room;
