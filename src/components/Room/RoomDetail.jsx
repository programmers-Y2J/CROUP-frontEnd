import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { useCurrentMusicStore, usePlayListStore, useRoomDataStore } from '../../stores/Room/useRoomStore';

import roomOutIcon from '../../assets/icons/room-out.svg';
import nowPlaying from '../../assets/icons/now-playing.svg';
import pauseIcon from '../../assets/icons/pause-playing.svg';
import userProfile from '../../assets/images/exanoke-user-profile.svg';

const RoomDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  width: 100%;
  height: 400px;
  background: #b6e8ff;
  position: relative;
  margin-bottom: 150px;
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
  border-radius: 20px;
  width: 450px;
  height: 253px;
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
  width: 220px;
  padding: 15px 60px;
  background: #fff;
  border-radius: 50px;
  margin: 0 auto;
  > h5 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

const PlayButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  position: absolute;
  left: 20px;
  cursor: pointer;
  > img {
    width: 100%;
    height: 100%;
  }
`;

function RoomDetail() {
  const playList = usePlayListStore((state) => state.playList);
  const roomData = useRoomDataStore((state) => state.roomData);
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = useCurrentMusicStore();
  const navigate = useNavigate();

  const thumbnail = playList[0].musicThumbnail;
  const firstSong = { title: playList[0].musicTitle, videoId: playList[0].videoId };

  useEffect(() => {
    setCurrentMusic(firstSong);
  }, []);

  const handleOnEnded = () => {
    let nextMusic = 0;
    const currentMusicIndex = playList.findIndex((music) => music.videoId === currentMusic.videoId);

    if (currentMusicIndex === playList.length - 1) [nextMusic] = playList;
    else nextMusic = playList[currentMusicIndex + 1];

    setCurrentMusic({ title: nextMusic.musciTitle, videoId: nextMusic.videoId });
    setIsPlaying(true);
  };

  const handleRoomOutClick = () => {
    navigate('/');
  };

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <RoomDetailContainer>
      <RoomOutIcon onClick={handleRoomOutClick} src={roomOutIcon} alt="room out icon" />
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <ReactPlayer
        style={{ position: 'absolute', opacity: 1, zIndex: -99 }}
        url={`https://www.youtube.com/watch?v=${currentMusic.videoId}`}
        playing={isPlaying}
        onEnded={handleOnEnded}
      />
      <RoomStatusWrapper>
        <RoomDetailWrapper>
          <h1>{roomData.title}</h1>
          <p>{roomData.description}</p>
        </RoomDetailWrapper>
        <RoomHost>
          <img src={userProfile} alt="user profile" />
          <h5>{roomData.host}</h5>
        </RoomHost>
        <PlayingSongWrapper>
          <PlayButton type="button" onClick={handlePlayButtonClick}>
            <img src={isPlaying ? pauseIcon : nowPlaying} alt="now playing" />
          </PlayButton>
          <h5>{currentMusic.title}</h5>
        </PlayingSongWrapper>
      </RoomStatusWrapper>
    </RoomDetailContainer>
  );
}

export default RoomDetail;
