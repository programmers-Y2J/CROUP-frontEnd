import { styled } from 'styled-components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import QuestionPost from './QuestionPost';
import { useRoomDataStore } from '../../../stores/Room/useRoomStore';

const QuestionContainer = styled.div`
  width: 680px;
  padding-left: 20px;
`;

const CategoryWrapper = styled.ul`
  display: flex;
  width: 100%;
  gap: 405px;
  > li {
    font-size: 0.8rem;
  }
`;

const QuestionList = styled.ul`
  width: 100%;
  height: 450px;
  overflow-y: scroll;
`;

const getQuestionList = async (roomId) => {
  const list = await axios.get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}/question`);
  return list;
};

function Question() {
  const { roomId } = useRoomDataStore((state) => state.roomData);
  const { data, isSuccess, isError } = useQuery({
    queryKey: [`question-${roomId}`],
    queryFn: () => getQuestionList(roomId),
    staleTime: 20000,
  });

  if (isError) return console.log('is Error');
  if (isSuccess) {
    return (
      <QuestionContainer>
        <CategoryWrapper>
          <li>제목</li>
          <li>작성자</li>
        </CategoryWrapper>
        <QuestionList>
          {data.data.qnaList.map((question) => (
            <QuestionPost
              key={question.questionId}
              questionId={question.questionId}
              title={question.title}
              userName={question.userName}
            />
          ))}
        </QuestionList>
      </QuestionContainer>
    );
  }
}

export default Question;
