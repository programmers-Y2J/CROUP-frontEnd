import { styled } from 'styled-components';

import Chat from './Chat/Chat';

const UserContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuTabWrapper = styled.ul`
  display: flex;
  gap: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  width: 45vw;
  > li {
    color: #ccc;
    cursor: pointer;
  }
`;

function UserContent() {
  return (
    <UserContentContainer>
      <MenuTabWrapper>
        <li>
          <h4>채팅</h4>
        </li>
        <li>
          <h4>질문 게시판</h4>
        </li>
      </MenuTabWrapper>
      <Chat />
    </UserContentContainer>
  );
}

export default UserContent;
