import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useUserData } from '@/stores/useUserStore';
import QuillEditor from '@ui/editor/QuillEditor';
import useQuestionPostMutation from '@/hooks/useQuestionPostMutation';

function QuestionPost() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const editorRef = useRef();
  const titleRef = useRef();
  const tagRef = useRef();
  const { roomId } = useParams();
  const { userName } = useUserData((state) => state.userData);
  const { mutation: postQuestion } = useQuestionPostMutation(roomId);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 2500);
    }
  }, [isError]);

  const handleClickSend = () => {
    const editorContent = editorRef.current.value;
    const title = titleRef.current.value;
    const tags = tagRef.current.value;

    if (title.trim().length === 0) {
      setIsError(true);
      setErrorMessage('제목을 입력해 주세요.');
      return;
    }

    if (editorContent.trim().length === 0) {
      setIsError(true);
      setErrorMessage('내용을 입력해 주세요.');
      return;
    }

    if (tags.trim().length === 0) {
      setIsError(true);
      setErrorMessage('대표 카테고리를 입력해 주세요.');
      return;
    }

    postQuestion.mutate({ title, content: editorContent, tags, roomId });
    editorRef.current.value = '';
    titleRef.current.value = '';
    tagRef.current.value = '';
  };

  return (
    <div className="flex flex-col w-1/2">
      <header className="flex items-center justify-between p-4 border-b h-14">
        <div className="flex items-center">
          <Input type="text" placeholder="제목을 입력해 주세요." className="flex-1 mr-4 w-[350px]" ref={titleRef} />
        </div>
        <p className="text-[0.75rem] text-muted-foreground">{userName}</p>
      </header>
      <div className="p-4 flex-1 overflow-auto">
        {isError && (
          <Alert variant="destructive" className="mb-3">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        <QuillEditor ref={editorRef} />
      </div>
      <footer className="flex items-center justify-end p-4 border-t h-14">
        <Input type="text" placeholder="대표 카테고리를 입력해 주세요." className="w-[200px]" ref={tagRef} />
        <Button size="sm" className="ml-4" onClick={handleClickSend}>
          Send
        </Button>
      </footer>
    </div>
  );
}

export default QuestionPost;
