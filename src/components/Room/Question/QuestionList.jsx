import { styled } from 'styled-components';

import { useParams } from 'react-router-dom';
import QuestionListItem from './QuestionListItem';
import useQuestionsQuery from '../../../hooks/useQuestionsQuery';

const QuestionListContainer = styled.ul`
  width: 100%;
  display: flex;
  gap: 40px;
`;

function QuestionList() {
  const { roomId } = useParams();
  const { data, isSuccess, isError } = useQuestionsQuery(roomId);

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
