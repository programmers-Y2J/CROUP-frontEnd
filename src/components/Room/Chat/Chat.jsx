import { styled } from 'styled-components';
import Message from './Message';
import GuestList from '../Guest/GuestList';

const ChatContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const ChattingWrapper = styled.div`
  width: 25vw;
  height: 50vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageList = styled.ul`
  width: 80%;
  height: 80%;
  padding-top: 5%;
  overflow-y: scroll;
`;

const MessageInput = styled.input`
  width: 79%;
  height: 7%;
  border: 1px solid #00b3ff;
  border-radius: 15px;
  padding: 0 10px;
  &:focus {
    background-color: #def2ff;
    outline: none;
  }
`;

const exampleMessage = [
  { key: 1, user: 'jjangu', message: 'message' },
  { key: 2, user: 'bonin', message: 'message', isMine: true },
  { key: 3, user: 'bonin', message: 'message', isMine: true },
  { key: 4, user: 'jjangu', message: 'message' },
];

function Chat() {
  return (
    <ChatContainer>
      <ChattingWrapper>
        <MessageList>
          {exampleMessage.map((message) => (
            <Message key={message.key} user={message.user} message={message.message} isMine={message.isMine || false} />
          ))}
        </MessageList>
        <MessageInput type="text" />
      </ChattingWrapper>
      <GuestList />
    </ChatContainer>
  );
}

export default Chat;
