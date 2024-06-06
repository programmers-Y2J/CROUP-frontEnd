import { styled } from 'styled-components';

const FooterContainer = styled.div`
  width: 1300px;
  height: 130px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.title};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <h1>Croup</h1>
    </FooterContainer>
  );
}

export default Footer;
