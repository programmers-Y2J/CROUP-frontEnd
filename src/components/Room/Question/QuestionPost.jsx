import { styled } from 'styled-components';

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

function QuestionPost() {
  return (
    <QuestionPostContainer>
      <p>Title</p>
      <span>
        <img src={profileImage} alt="user profile" />
        <h5>user name</h5>
      </span>
    </QuestionPostContainer>
  );
}

export default QuestionPost;
