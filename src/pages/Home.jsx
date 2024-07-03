import styled from 'styled-components';
import HeaderComponent from '../components/Home/HeaderComponent';
import RoomList from '../components/Home/RoomListComponent';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  gap: 50px;
  margin: auto;
`;
function Home() {
  return (
    <HomeContainer>
      <HeaderComponent />
      <RoomList />
    </HomeContainer>
  );
}

export default Home;
