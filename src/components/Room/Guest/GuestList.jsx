import { styled } from 'styled-components';

import Guest from './Guest';

const GuestListContainer = styled.ul`
  width: 180px;
  height: 495px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px 0 0 35px;
`;

const exampleGuest = [
  { key: 1, name: 'bonin', isOwner: true },
  { key: 2, name: 'jjangu' },
];

function GuestList() {
  return (
    <GuestListContainer>
      {exampleGuest.map((user) => (
        <Guest key={user.key} name={user.name} isOwner={user.isOwner || false} />
      ))}
    </GuestListContainer>
  );
}

export default GuestList;
