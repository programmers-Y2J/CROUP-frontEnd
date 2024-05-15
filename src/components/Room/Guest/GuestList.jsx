import { styled } from 'styled-components';

import Guest from './Guest';

const GuestListContainer = styled.ul`
  width: 13vw;
  height: 48vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2vh 0 0 2vw;
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
