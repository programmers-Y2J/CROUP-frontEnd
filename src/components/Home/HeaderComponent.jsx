import { TypographyH1 } from '@ui/typography/TypographyH1';
import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const MiddleWrapper = styled.div`
  height: 400px;
  width: 1300px;
  position: relative;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  border-radius: 30px;
  background-color: #00b3ff;
  display: flex;
  > h1:nth-child(2) {
    display: flex;
    position: absolute;
    right: 50px;
    justify-content: center;
    align-items: flex-end;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    opacity: 0.6;
    width: 301px;
    height: 121px;
    font-size: 100px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.white};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 690px;
  margin-right: 300px;
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
const LowWrapper = styled.h1`
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
          <TypographyH1>집중을 위한 공간을 만나는</TypographyH1>
          <TypographyH1>최고의 방법</TypographyH1>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </TextWrapper>
        <h1>Croup</h1>
      </MiddleWrapper>
      <LowWrapper>오늘 하루 즐거운 집중을 찾아보세요.</LowWrapper>
    </HeaderContainer>
  );
}

export default HeaderComponent;
