import { styled } from 'styled-components';

import { Outlet } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import ModalCard from '../../Modal/ModalCard';

const QuestionContainer = styled.div`
  width: 850px;
  height: 480px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.section};
`;

const BoardTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > h2 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > button {
    width: 60px;
    height: 30px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    border-radius: 5px;
  }
`;

const PostQuestionModal = styled.div`
  width: 450px;
  height: 490px;
  background: ${({ theme }) => theme.color.background};
  border-radius: 20px;
`;

const PostQuestionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  > h3 {
    padding: 7px 0;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const PostQuestionForm = styled.form`
  height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};

  > label {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    display: flex;
    flex-direction: column;
  }

  input {
    width: 310px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 0 10px;
  }

  textarea {
    width: 310px;
    height: 205px;
    resize: none;
    border: 1px solid ${({ theme }) => theme.color.border};
    font-size: ${({ theme }) => theme.fontSize.small};
    border-radius: 5px;
    padding: 10px 10px;
    outline: none;
  }

  > button {
    width: 100px;
    height: 25px;
    border-radius: 15px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

function Questions() {
  const { isOpen, open, close } = useModal();
  const handleClickAsk = () => {
    open();
  };

  return (
    <QuestionContainer>
      <BoardTitleWrapper>
        <h2>궁금한게 있다면 무엇이든</h2>
        <button type="button" onClick={handleClickAsk}>
          질문하기
        </button>
      </BoardTitleWrapper>
      <Outlet />
      {isOpen && (
        <ModalCard isOpen={isOpen} close={close}>
          <PostQuestionModal>
            <PostQuestionTitle>
              <h3>질문하기</h3>
            </PostQuestionTitle>
            <PostQuestionForm>
              <label htmlFor="title">
                제목
                <input type="text" id="title" placeholder="제목을 입력해 주세요" />
              </label>
              <label htmlFor="question">
                질문
                <textarea id="question" placeholder="질문을 입력해 주세요" />
              </label>
              <button type="submit">등록</button>
            </PostQuestionForm>
          </PostQuestionModal>
        </ModalCard>
      )}
    </QuestionContainer>
  );
}

export default Questions;
