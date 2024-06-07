import { styled } from 'styled-components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useRoomDataStore } from '../../../stores/Room/useRoomStore';
import QuestionListItem from './QuestionListItem';

const QuestionListContainer = styled.ul`
  width: 100%;
  display: flex;
  gap: 40px;
`;

const getQuestionList = async () => {
  // const list = await axios.get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}/question`);
  const list = await axios.get(`/dummy/dummyQuestionData.json`);

  return list;
};
function QuestionList() {
  const { roomId } = useRoomDataStore((state) => state.roomData);
  const { data, isSuccess, isError } = useQuery({
    queryKey: [`question-${roomId}`],
    queryFn: () => getQuestionList(roomId),
    staleTime: 20000,
  });

  if (isError) console.log('QuestionList error');
  if (isSuccess) {
    return (
      <QuestionListContainer>
        {data.data.qnaList.map((questionItem) => {
          return (
            <QuestionListItem
              key={questionItem.questionId}
              questionId={questionItem.questionId}
              title={questionItem.title}
              userName={questionItem.userName}
              content={questionItem.content}
            />
          );
        })}
      </QuestionListContainer>
    );
  }
}

export default QuestionList;
