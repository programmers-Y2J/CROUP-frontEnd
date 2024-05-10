import { styled } from 'styled-components';

import roomOutIcon from '../../assets/icons/room-out.svg';
import nowPlaying from '../../assets/icons/now-playing.svg';
import thumbnail from '../../assets/images/example-thumbnail.svg';
import userProfile from '../../assets/images/exanoke-user-profile.svg';

const RoomDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100vw;
  height: 45vh;
  background: linear-gradient(to left, #eff9ff, #b6e8ff);
  position: relative;
`;

const RoomOutIcon = styled.img`
  width: 3vmin;
  height: 3vmin;
  position: absolute;
  top: 3vmin;
  left: 3vmin;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 33vmin;
  height: 33vmin;
`;

const RoomStatusWrapper = styled.div`
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const RoomDetailWrapper = styled.div`
  > h1 {
    font-size: 4rem;
    letter-spacing: 2px;
  }
`;

const RoomHost = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  > img {
    width: 5vmin;
    height: 5vmin;
  }
`;

const PlayingSongWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.8vh 8vw;
  background: #fff;
  border-radius: 50px;
  margin: 0 auto;
  > img {
    position: absolute;
    left: 20px;
    width: 3vmin;
    height: 3vmin;
    cursor: pointer;
  }
`;

function RoomDetail() {
  return (
    <RoomDetailContainer>
      <RoomOutIcon src={roomOutIcon} alt="room out icon" />
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <RoomStatusWrapper>
        <RoomDetailWrapper>
          <h1>Codding With</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </RoomDetailWrapper>
        <RoomHost>
          <img src={userProfile} alt="user profile" />
          <h5>SebellKo</h5>
        </RoomHost>
        <PlayingSongWrapper>
          <img src={nowPlaying} alt="now playing" />
          <h5>ADOY - Winter</h5>
        </PlayingSongWrapper>
      </RoomStatusWrapper>
    </RoomDetailContainer>
  );
}

export default RoomDetail;
