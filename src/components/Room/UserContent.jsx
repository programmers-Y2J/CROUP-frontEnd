import { styled } from 'styled-components';
import Chat from './Chat/Chat';
import Questions from './Question/Questions';

function UserContent({ chats, roomMember }) {
  return (
    <UserContentContainer>
      <Questions />
      <Chat chats={chats} roomMember={roomMember} />
    </UserContentContainer>
  );
}

const UserContentContainer = styled.div`
  width: 1150px;
  display: flex;
  gap: ${({ theme }) => theme.spacing.section};
`;

export default UserContent;
