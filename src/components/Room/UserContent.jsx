import { styled } from 'styled-components';
// import { io } from 'socket.io-client';
import Chat from './Chat/Chat';
import Questions from './Question/Questions';

// import { useRoomContentStore } from '../../stores/Room/useRoomStore';

const UserContentContainer = styled.div`
  width: 1150px;
  display: flex;
  gap: ${({ theme }) => theme.spacing.section};
`;

// url 수정 해야됨
// const socket = io(process.env.REACT_APP_API_URL, { path: '/rooms' });

function UserContent({ chats, roomMember }) {
  // const { currentContent, setContent } = useRoomContentStore();

  // const chatButtonStyle = currentContent === 'chat' ? { color: '#04314d' } : {};
  // const questionButtonStyle = currentContent === 'question' ? { color: '#04314d' } : {};

  // const handleClickCategory = (content) => {
  //   setContent(content);
  // };

  return (
    <UserContentContainer>
      <Questions />
      <Chat chats={chats} roomMember={roomMember} />
    </UserContentContainer>
  );
}

export default UserContent;
