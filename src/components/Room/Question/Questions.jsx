'use client';

import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuestionStore } from '@/stores/Room/useRoomStore';
import QuestionList from './QuestionList';

function Questions() {
  const [activeTab, setActiveTab] = useState('chat');
  const navigate = useNavigate();
  const currentQuestionId = useQuestionStore((state) => state.currentQuestionId);

  return (
    <div className="flex h-[650px] w-full max-w-[1208px] border rounded-lg">
      <div className="flex flex-col w-1/2 border-r">
        <header className="flex items-center justify-between p-4 border-b h-14">
          <h1 className="text-xl font-bold">질문 게시판</h1>
          <div className="flex space-x-2">
            <Button onClick={() => navigate('post-question')} variant="outline" className="p-3 w-[70px]">
              질문하기
            </Button>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger
                  value="post"
                  onClick={() => currentQuestionId.trim().length !== 0 && navigate(`question/${currentQuestionId}`)}>
                  Post
                </TabsTrigger>
                <TabsTrigger value="chat" onClick={() => navigate('chat')}>
                  Chat
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>
        <QuestionList setActiveTab={setActiveTab} />
      </div>
      <Outlet />
    </div>
  );
}

export default Questions;
