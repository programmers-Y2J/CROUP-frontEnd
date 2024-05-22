import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
`;
const HighWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 10px;
  > button {
    width: 85px;
    height: 30px;
    border-radius: 30px;
    color: white;
    background-color: #04314d;
    font-weight: bold;
    border: 1px solid white;
    margin-right: 40px;
  }
`;
const MiddleWrapper = styled.div`
  pointer-events: none;
  border-radius: 30px;
  background-color: #00b3ff;
  height: 40vh;
  display: flex;
  > div:nth-child(1) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      font-size: 0.8rem;
    }
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 50%;
    writing-mode: vertical-rl; /* 세로로 글씨 쓰기 */
    text-orientation: sideways;
    transform: rotate(180deg);
    font-size: 5rem;
    font-weight: 700;
    padding-left: 40px;
    color: white;
    opacity: 0.6;
  }
`;
const LowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
`;

function HeaderComponent() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <HeaderContainer>
      <HighWrapper>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
      </HighWrapper>
      <MiddleWrapper>
        <div>
          <p>
            <h1>
              집중을 위한 공간을 만나는 <br />
              최고의 방법
            </h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </p>
        </div>
        <div>Croup</div>
      </MiddleWrapper>
      <LowWrapper>
        <h2>오늘 하루 즐거운 집중을 찾아보세요.</h2>
      </LowWrapper>
    </HeaderContainer>
  );
}

export default HeaderComponent;
