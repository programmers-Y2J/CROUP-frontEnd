import { TypographyH1 } from '@ui/typography/TypographyH1';
import { styled } from 'styled-components';

const FooterContainer = styled.div`
  width: 1300px;
  height: 130px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <TypographyH1>Croup</TypographyH1>
    </FooterContainer>
  );
}

export default Footer;
