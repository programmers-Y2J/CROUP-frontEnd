import { styled } from 'styled-components';

import { useNavigate } from 'react-router-dom';

const QuestionListItemContainer = styled.li`
  width: 180px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  > h4 {
    position: absolute;
    left: 8%;
    top: 13%;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    width: 135px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  > h5 {
    position: absolute;
    bottom: 13%;
    right: 8%;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

function QuestionListItem({ questionId, title, userName, content }) {
  const navigate = useNavigate();

  const handleClickPost = () => {
    navigate(`question/${questionId}`);
  };
  return (
    <QuestionListItemContainer onClick={handleClickPost}>
      <h4>{title}</h4>
      <p>{content}</p>
      <h5>{userName}</h5>
    </QuestionListItemContainer>
  );
}

export default QuestionListItem;
