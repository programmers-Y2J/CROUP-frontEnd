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
  width: 100%;
  height: 400px;
  background: linear-gradient(to left, #eff9ff, #b6e8ff);
  position: relative;
  margin-bottom: 100px;
  margin-top: 20px;
  border-radius: 20px 20px 0 0;
`;

const RoomOutIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  left: 25px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 280px;
  height: 280px;
`;

const RoomStatusWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
`;

const RoomDetailWrapper = styled.div`
  > h1 {
    font-size: 4rem;
    letter-spacing: 2px;
  }
  > p {
    font-size: 0.8rem;
  }
`;

const RoomHost = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  > img {
    width: 30px;
    height: 30px;
  }
`;

const PlayingSongWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 100px;
  background: #fff;
  border-radius: 50px;
  margin: 0 auto;
  > img {
    position: absolute;
    left: 20px;
    width: 20px;
    height: 20px;
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
