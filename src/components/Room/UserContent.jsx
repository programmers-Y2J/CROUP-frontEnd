import { styled } from 'styled-components';

import Question from './Question/Question';
import Chat from './Chat/Chat';

import useRoomStore from '../../stores/Room/useRoomStore';

const UserContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuTabWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 45vw;
  height: 3vh;
  border-bottom: 1px solid #ccc;
  > li {
    color: #ccc;
    cursor: pointer;
    > button {
      background: none;
      font-size: 1rem;
      font-weight: 700;
      color: #ccc;
      cursor: pointer;
    }
  }
  > button {
    padding: 2px 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50px;
    color: #ccc;
    font-size: 0.7rem;
    font-weight: 500;
    transition: all 0.5s ease;
    margin-left: auto;
    margin-right: 25px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #04314d;
    }
  }
`;

function UserContent() {
  const { currentContent, setContent } = useRoomStore();

  const chatButtonStyle = currentContent === 'chat' ? { color: '#04314d' } : {};
  const questionButtonStyle = currentContent === 'question' ? { color: '#04314d' } : {};

  const handleClickCategory = (content) => {
    setContent(content);
  };

  return (
    <UserContentContainer>
      <MenuTabWrapper>
        <li>
          <button style={chatButtonStyle} onClick={() => handleClickCategory('chat')} type="button">
            채팅
          </button>
        </li>
        <li>
          <button style={questionButtonStyle} onClick={() => handleClickCategory('question')} type="button">
            질문 게시판
          </button>
        </li>
        {currentContent === 'question' && <button type="button">작성</button>}
      </MenuTabWrapper>
      {currentContent === 'chat' && <Chat />}
      {currentContent === 'question' && <Question />}
    </UserContentContainer>
  );
}

export default UserContent;
