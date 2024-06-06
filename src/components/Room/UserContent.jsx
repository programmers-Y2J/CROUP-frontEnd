import { styled } from 'styled-components';
// import { io } from 'socket.io-client';
import Chat from './Chat/Chat';
import Questions from './Question/Questions';

// url 수정 해야됨
// const socket = io(process.env.REACT_APP_API_URL, { path: '/rooms' });

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
