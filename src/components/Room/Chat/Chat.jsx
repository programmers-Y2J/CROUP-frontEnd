import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

import { ScrollArea } from '@ui/scroll-area';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { useUserData } from '@/stores/useUserStore';
import { useRoomDataStore } from '@/stores/Room/useAuthStore';
import Message from './Message';

const demoChats = [
  { user: 'sebell', userId: 'aaa', message: 'hello hows it going ?' },
  { user: 'ko', userId: 'bbb', message: 'Im good you ?' },
  { user: 'sebell', userId: 'aaa', message: 'Fine good' },
];

const socket = io(process.env.REACT_APP_API_URL, { path: '/socket' });

function Chat() {
  const [chats, setChats] = useState(demoChats);
  const { roomId } = useParams();
  const userData = useUserData((state) => state.userData);
  const setRoomMemberCount = useRoomDataStore((state) => state.setRoomMemberCount);
  const message = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.emit('joinRoom', roomId, { nickName: userData.userName, userId: userData.userId });
    socket.on('updateUser', (users) => {
      setRoomMemberCount(users.length);
    });
    socket.on('chat', (newMessage) => {
      setChats((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('updateUser');
      socket.off('chat');
    };
  }, [socket]);

  useEffect(() => {
    const scrollArea = scrollRef.current.children[1];
    const chatsWrapper = scrollRef.current.children[1].children[0];

    scrollArea.scrollTop = chatsWrapper.offsetHeight;
  }, [chats]);

  const sendMessage = () => {
    const newMessage = { user: userData.userName, userId: userData.userId, message: message.current.value };
    socket.emit('chat', newMessage, roomId);
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

export default Chat;
