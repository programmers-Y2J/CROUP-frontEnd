import { styled } from 'styled-components';

import userProfile from '../../../assets/images/example-profile.svg';

const QuestionPostContainer = styled.div`
  width: 750px;
  height: 420px;
  display: flex;
  gap: 35px;
`;

const QuestionDetailWrapper = styled.div`
  position: relative;

  > button {
    position: absolute;
    top: -5%;
    left: 3%;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.placeholder};
    background: none;
    transition: 0.3s all ease;

    &:hover {
      color: ${({ theme }) => theme.color.black};
    }
  }
`;

const QuestionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const QuestionTitleWrapper = styled.div`
  width: 495px;
  height: 80px;
  padding-left: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  > h3 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
  }

  img {
    width: 25px;
    height: 25px;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const QuestionDescription = styled.div`
  width: 495px;
  height: 323px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: 20px 0 0 20px;
`;

const CommentWrapper = styled.div`
  width: 200px;
  height: 440px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentList = styled.ul`
  width: 90%;
  height: 92%;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: ${({ theme }) => theme.spacing.small};

  h5 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const CommentForm = styled.form`
  width: 100%;
  height: 8%;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;

  > input {
    width: 85%;
    padding-left: 5px;
    border: 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    outline: none;
  }

  > button {
    background: none;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    cursor: pointer;
  }
`;

function QuestionPost() {
  return (
    <QuestionPostContainer>
      <QuestionDetailWrapper>
        <button type="button">뒤로가기</button>
        <QuestionContentWrapper>
          <QuestionTitleWrapper>
            <h3>Question Title</h3>
            <div>
              <img src={userProfile} alt="user profile" />
              <h4>sebell</h4>
              <h5>2024-06-13</h5>
            </div>
          </QuestionTitleWrapper>
          <QuestionDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s const QuestionDetailWrapper = styled.div``
          </QuestionDescription>
        </QuestionContentWrapper>
      </QuestionDetailWrapper>
      <CommentWrapper>
        <CommentList>
          <li>
            <h5>user</h5>
            <p>Lorem Ipsum is simply dummy text of the</p>
          </li>
          <li>
            <h5>user</h5>
            <p>Lorem Ipsum is simply dummy text of the</p>
          </li>
        </CommentList>
        <CommentForm>
          <input type="text" placeholder="댓글을 입력해 주세요." />
          <button type="submit">게시</button>
        </CommentForm>
      </CommentWrapper>
    </QuestionPostContainer>
  );
}

export default QuestionPost;
