import { styled } from 'styled-components';

import { useEffect, useState } from 'react';
import Message from './Message';
import GuestList from '../Guest/GuestList';
import { useRoomDataStore } from '../../../stores/Room/useRoomStore';

const ChatContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ChattingWrapper = styled.div`
  width: 440px;
  height: 510px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageList = styled.ul`
  width: 80%;
  height: 83%;
  padding-top: 5%;
  overflow-y: scroll;
`;

const SendMessageWrapper = styled.div`
  width: 90%;
  height: 6%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const MessageInput = styled.input`
  width: 75%;
  height: 100%;
  border: 1px solid #00b3ff;
  border-radius: 15px;
  padding: 0 10px;
  &:focus {
    background-color: #def2ff;
    outline: none;
  }
`;

const SendButton = styled.button`
  width: 14%;
  height: 100%;
  background: #050505;
  color: #fff;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
`;

// 사용자 판별 후 message 디자인 변경 해야함.

function Chat({ socket, chats, roomMember }) {
  const { roomId } = useRoomDataStore((state) => state.roomData);
  const [messages, setMessages] = useState(chats);
  const [currentMembers, setCurrentMembers] = useState(roomMember);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', roomId, { nickName: '닉네임', userId: '유저 아이디' });
    socket.on('updateUser', (users) => {
      setCurrentMembers(users);
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

  const handleSendMessage = () => {
    if (message.trim().length !== 0) {
      // localStorage의 jwt의 유저 정보로 변경해야됨.
      const chatMessage = { userId: 'userId', nickName: 'nickName', chat: 'chat' };
      socket.emit('chat', chatMessage, roomId);
      setMessages((prevMessage) => [...prevMessage, { ...chatMessage }]);
      setMessage('');
    }
  };

  return (
    <ChatContainer>
      <ChattingWrapper>
        <MessageList>
          {messages.map((messageItem) => (
            <Message
              key={messageItem.chat}
              user={messageItem.userId}
              message={messageItem.chat}
              isMine={messageItem.isMine || false}
            />
          ))}
        </MessageList>
        <SendMessageWrapper>
          <MessageInput type="text" onChange={(event) => handleChangeInput(event)} />
          <SendButton type="button" onClick={handleSendMessage}>
            전송
          </SendButton>
        </SendMessageWrapper>
      </ChattingWrapper>
      <GuestList roomMember={currentMembers} />
    </ChatContainer>
  );
}

export default Chat;
