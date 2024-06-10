import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MiddleWrapper = styled.div`
  height: 501px;
  width: 1300px;
  pointer-events: none;
  border-radius: 30px;
  background-color: #00b3ff;
  display: flex;
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    opacity: 0.6;
    width: 301px;
    height: 121px;
    font-size: 100px;
    margin-top: 200px;
    margin-left: 100px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.white};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 663px;
  margin-left: 144px;
  margin-top: 170px;
  > div:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  > div:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-top: ${({ theme }) => theme.spacing.small};
  }
`;
const LowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.section};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

function HeaderComponent() {
  return (
    <HeaderContainer>
      <MiddleWrapper>
        <TextWrapper>
          <div>집중을 위한 공간을 만나는 최고의 방법</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </TextWrapper>
        <div>Croup</div>
      </MiddleWrapper>
      <LowWrapper>오늘 하루 즐거운 집중을 찾아보세요.</LowWrapper>
    </HeaderContainer>
  );
}

export default HeaderComponent;
