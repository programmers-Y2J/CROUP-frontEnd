import { styled } from 'styled-components';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Message from './Message';
import { useRoomDataStore } from '../../../stores/Room/useRoomStore';

const socket = io(process.env.REACT_APP_API_URL, { path: '/socket' });

function Chat({ chats }) {
  const { roomId } = useParams();
  const { setRoomMemberCount } = useRoomDataStore((state) => state.setRoomMemberCount);
  const [messages, setMessages] = useState(chats);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', roomId, { nickName: '닉네임', userId: '유저 아이디' });
    socket.on('updateUser', (users) => {
      setRoomMemberCount(users.length);
    });
    socket.on('chat', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('updateUser');
      socket.off('chat');
    };
  }, []);

  const handleChangeInput = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitMessage = () => {
    if (message.trim().length !== 0) {
      // localStorage의 jwt의 유저 정보로 변경해야됨.
      const chatMessage = { userId: 'userId', nickName: 'nickName', chat: 'chat' };
      // socket.emit('chat', chatMessage, roomId);
      setMessages((prevMessage) => [...prevMessage, { ...chatMessage }]);
      setMessage('');
    }
  };

  return (
    <ChatContainer>
      <ChatList>
        {messages.map((messageItem) => {
          return (
            <Message
              key={messageItem.userId}
              userId={messageItem.userId}
              user={messageItem.nickName}
              message={messageItem.chat}
            />
          );
        })}
      </ChatList>
      <MessageForm onSubmit={handleSubmitMessage}>
        <input type="text" placeholder="메세지를 입력해 주세요." onChange={handleChangeInput} />
        <button type="submit">전송</button>
      </MessageForm>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: 250px;
  height: 520px;
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChatList = styled.ul`
  width: 90%;
  height: 90%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.chat};
`;

const MessageForm = styled.form`
  display: flex;
  gap: 10px;

  > input {
    width: 165px;
    height: 20px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  > button {
    width: 30px;
    height: 20px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

export default Chat;
