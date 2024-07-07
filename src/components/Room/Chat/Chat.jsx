// import { styled } from 'styled-components';
// import io from 'socket.io-client';
// import { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import Message from './Message';
// import { useRoomDataStore } from '../../../stores/Room/useRoomStore';

// const socket = io(process.env.REACT_APP_API_URL, { path: '/socket' });

// function Chat({ chats }) {
//   const { roomId } = useParams();
//   const setRoomMemberCount = useRoomDataStore((state) => state.setRoomMemberCount);
//   const [messages, setMessages] = useState(chats);
//   const [message, setMessage] = useState('');
//   const chatList = useRef();
//   const userId = localStorage.getItem('userId');
//   const nickName = localStorage.getItem('nickName');

//   useEffect(() => {
//     socket.emit('joinRoom', roomId, { nickName, userId });
//     socket.on('updateUser', (users) => {
//       setRoomMemberCount(users.length);
//     });
//     socket.on('chat', (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     });

//     return () => {
//       socket.off('updateUser');
//       socket.off('chat');
//     };
//   }, [socket]);

//   useEffect(() => {
//     chatList.current.scrollTop = chatList.current.offsetTop;
//   }, [messages]);

//   const handleChangeInput = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSubmitMessage = (event) => {
//     event.preventDefault();
//     if (message.trim().length !== 0) {
//       const chatMessage = { userId, nickName, chat: message };
//       socket.emit('chat', chatMessage, roomId);
//       setMessage('');
//     }
//   };

//   return (
//     <ChatContainer>
//       <ChatList ref={chatList}>
//         {messages.map((messageItem) => {
//           return (
//             <Message
//               key={messageItem.userId}
//               userId={messageItem.userId}
//               user={messageItem.nickName}
//               message={messageItem.chat}
//             />
//           );
//         })}
//       </ChatList>
//       <MessageForm onSubmit={(event) => handleSubmitMessage(event)}>
//         <input type="text" placeholder="메세지를 입력해 주세요." onChange={handleChangeInput} value={message} />
//         <button type="submit">전송</button>
//       </MessageForm>
//     </ChatContainer>
//   );
// }

// const ChatContainer = styled.div`
//   width: 250px;
//   height: 520px;
//   background: ${({ theme }) => theme.color.background};
//   border: 1px solid ${({ theme }) => theme.color.border};
//   border-radius: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ChatList = styled.ul`
//   width: 90%;
//   height: 90%;
//   overflow-y: scroll;
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing.chat};
// `;

// const MessageForm = styled.form`
//   display: flex;
//   gap: 10px;

//   > input {
//     width: 165px;
//     height: 20px;
//     font-size: ${({ theme }) => theme.fontSize.small};
//   }

//   > button {
//     width: 30px;
//     height: 20px;
//     border-radius: 5px;
//     background: ${({ theme }) => theme.color.black};
//     color: ${({ theme }) => theme.color.white};
//     font-size: ${({ theme }) => theme.fontSize.small};
//     font-weight: ${({ theme }) => theme.fontWeight.semiBold};
//   }
// `;

// export default Chat;

import { ScrollArea } from '@ui/scroll-area';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { useEffect, useRef, useState } from 'react';
import { useUserData } from '@/stores/useUserStore';
import Message from './Message';

const demoChats = [
  { user: 'sebell', userId: 'aaa', message: 'hello hows it going ?' },
  { user: 'ko', userId: 'bbb', message: 'Im good you ?' },
  { user: 'sebell', userId: 'aaa', message: 'Fine good' },
];

export default function Chat() {
  const [chats, setChats] = useState(demoChats);
  const userData = useUserData((state) => state.userData);
  const message = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const scrollArea = scrollRef.current.children[1];
    const chatsWrapper = scrollRef.current.children[1].children[0];

    scrollArea.scrollTop = chatsWrapper.offsetHeight;
  }, [chats]);

  const sendMessage = () => {
    const newMessage = { user: userData.userName, userId: userData.userId, message: message.current.value };
    setChats((prev) => [...prev, newMessage]);
    message.current.value = '';
  };

  const handleClickSend = () => {
    if (message.current.value.trim().length === 0) return;
    sendMessage();
  };

  const handlePressEnter = (event) => {
    if (message.current.value.trim().length === 0) return;

    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col w-1/2">
      <header className="flex items-center justify-between p-4 border-b h-14" />
      <div className="p-4 flex-1 overflow-auto">
        <ScrollArea className="h-[504px]" ref={scrollRef}>
          {chats.map((item) => (
            <Message key={item.userId} user={item.user} userId={item.userId} message={item.message} />
          ))}
        </ScrollArea>
      </div>
      <footer className="flex items-center p-4 border-t h-14">
        <Input
          type="text"
          placeholder="채팅을 입력해 주세요."
          className="flex-1 mr-4"
          ref={message}
          onKeyDown={(event) => handlePressEnter(event)}
        />
        <Button size="sm" className="ml-4" onClick={handleClickSend}>
          Send
        </Button>
      </footer>
    </div>
  );
}
