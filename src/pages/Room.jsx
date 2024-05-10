import { styled } from 'styled-components';

import RoomDetail from '../components/Room/RoomDetail';

const RoomContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

function Room() {
  return (
    <RoomContainer>
      <RoomDetail />
    </RoomContainer>
  );
}

export default Room;
