import { styled } from 'styled-components';
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
`;

function Question() {
  return (
    <QuestionContainer>
      <CategoryWrapper>
        <li>제목</li>
        <li>작성자</li>
      </CategoryWrapper>
      <QuestionList>
        <QuestionPost />
        <QuestionPost />
        <QuestionPost />
      </QuestionList>
    </QuestionContainer>
  );
}

export default Question;
