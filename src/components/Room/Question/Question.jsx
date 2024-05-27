import { styled } from 'styled-components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import QuestionPost from './QuestionPost';

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

const getQuestionList = async () => {
  const list = await axios.get('/room/:roomId/question');
  return list;
};

function Question() {
  const { data, isSuccess, isError } = useQuery({ queryKey: ['question'], queryFn: getQuestionList, staleTime: 20000 });

  if (isError) return console.log('is Error');
  if (isSuccess) {
    return (
      <QuestionContainer>
        <CategoryWrapper>
          <li>제목</li>
          <li>작성자</li>
        </CategoryWrapper>
        <QuestionList>
          {data.data.lists.map((question) => (
            <QuestionPost
              key={question.questionId}
              questionId={question.questionId}
              title={question.title}
              user={question.nickName}
            />
          ))}
        </QuestionList>
      </QuestionContainer>
    );
  }
}

export default Question;
