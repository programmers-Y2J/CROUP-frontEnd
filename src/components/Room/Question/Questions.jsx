'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Chat from '../Chat/Chat';
import QuestionDetail from './QuestionDetail';
import QuestionList from './QuestionList';
import QuestionPost from './QuestionPost';

export default function Questions() {
  const [tabState, setTabState] = useState('chat');
  const [activeTab, setActiveTab] = useState('chat');

  const handleClickTab = (type) => {
    setTabState(type);
  };
  return (
    <div className="flex h-[650px] w-full max-w-[1208px] border rounded-lg">
      <div className="flex flex-col w-1/2 border-r">
        <header className="flex items-center justify-between p-4 border-b h-14">
          <h1 className="text-xl font-bold">질문 게시판</h1>
          <div className="flex space-x-2">
            <Button onClick={() => handleClickTab('ask')} variant="outline" className="p-3 w-[70px]">
              질문하기
            </Button>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="post" onClick={() => handleClickTab('post')}>
                  Post
                </TabsTrigger>
                <TabsTrigger value="chat" onClick={() => handleClickTab('chat')}>
                  Chat
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>
        <QuestionList clickTabFn={handleClickTab} setActiveTab={setActiveTab} />
      </div>
      {tabState === 'chat' && <Chat />}
      {tabState === 'post' && <QuestionDetail />}
      {tabState === 'ask' && <QuestionPost />}
    </div>
  );
}
