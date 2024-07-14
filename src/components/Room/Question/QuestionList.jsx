import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useParams } from 'react-router-dom';

import useQuestionsQuery from '@/hooks/useQuestionsQuery';
import { ScrollArea } from '@ui/scroll-area';
import { Input } from '@ui/input';
import useSearchQuestionQuery from '@/hooks/useSearchQuestionQuery';
import QuestionListItem from './QuestionListItem';

function QuestionList({ clickTabFn, setActiveTab }) {
  const { roomId } = useParams();
  const [searchValue, setSearchValue] = useState('');
  const [questionList, setQuestionList] = useState([]);
  const { data: questionListData, isSuccess, isError, error } = useQuestionsQuery(roomId);
  const {
    data: searchList,
    isError: isSearchError,
    isSuccess: isSearchSuccess,
    error: searchError,
  } = useSearchQuestionQuery(roomId, searchValue, searchValue !== '');

  useEffect(() => {
    if (isSuccess && !searchValue) {
      setQuestionList(questionListData.data.qnaList);
    }
  }, [questionListData, isSuccess]);

  useEffect(() => {
    if (isSearchSuccess && searchValue) {
      setQuestionList(searchList.data.qnaList);
    } else if (isSearchError) {
      console.log(searchError);
    }
  }, [searchList, searchValue]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 300),
    [],
  );

  const handleSearchInput = (event) => {
    debouncedSearch(event.target.value);
  };

  if (isError) console.log(error);

  return (
    <div className="p-4 flex-1 overflow-auto">
      <Input type="search" placeholder="Search" className="mb-4" onChange={handleSearchInput} />
      <ScrollArea className="h-[500px]">
        <div className="space-y-4">
          {questionList.map((item) => (
            <QuestionListItem
              key={item.questionId}
              questionId={item.questionId}
              title={item.title}
              nickName={item.nickName}
              content={item.content}
              clickTabFn={clickTabFn}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default QuestionList;
