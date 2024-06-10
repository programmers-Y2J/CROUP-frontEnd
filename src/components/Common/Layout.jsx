import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

const LayoutContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.section};
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </LayoutContainer>
  );
}

export default Layout;
