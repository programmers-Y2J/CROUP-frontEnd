import { styled } from 'styled-components';

import { useNavigate } from 'react-router-dom';
import profileImage from '../../../assets/images/example-profile.svg';

const QuestionPostContainer = styled.li`
  width: 95%;
  height: 8vh;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;
  > p {
    width: 66%;
  }
  > span {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  img {
    width: 4vmin;
    height: 4vmin;
  }
`;

function QuestionPost({ questionId, title, user }) {
  const navigate = useNavigate();

  const handleClickPost = () => {
    navigate(`post/${questionId}`);
  };
  return (
    <QuestionPostContainer onClick={handleClickPost}>
      <p>{title}</p>
      <span>
        <img src={profileImage} alt="user profile" />
        <h5>{user}</h5>
      </span>
    </QuestionPostContainer>
  );
}

export default QuestionPost;
