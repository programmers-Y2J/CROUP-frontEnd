import { styled } from 'styled-components';

import Guest from './Guest';

const GuestListContainer = styled.ul`
  width: 180px;
  height: 495px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px 0 0 35px;
`;

function GuestList({ roomMember }) {
  return (
    <GuestListContainer>
      {roomMember.map((user) => (
        <Guest key={user.userId} name={user.nickName} isOwner={user.isOwner || false} />
      ))}
    </GuestListContainer>
  );
}

export default GuestList;
