import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { useCurrentMusicStore, usePlayListStore } from '../../stores/Room/useRoomStore';

import userProfile from '../../assets/images/example-profile.svg';

const RoomDetailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;

  iframe {
    border-radius: 30px;
  }
`;

const RoomDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`;

const RoomDescriptionWrapper = styled.div`
  > h1 {
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  > p {
    width: 360px;
    height: 55px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};

  > img {
    width: 30px;
    height: 30px;
  }

  > h4 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  > h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const MusicPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

const MusicPlayButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.primary};

  .play-button {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.color.white};
  }
`;

const CurrentMusicWrapper = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 15px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

function RoomDetail() {
  const playList = usePlayListStore((state) => state.playList);
  // const roomData = useRoomDataStore((state) => state.roomData);
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = useCurrentMusicStore();
  // const navigate = useNavigate();

  // const thumbnail = playList[0].musicThumbnail;
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

  // const handleRoomOutClick = () => {
  //   navigate('/');
  // };

  // const handlePlayButtonClick = () => {
  //   setIsPlaying(!isPlaying);
  // };
  return (
    <RoomDetailContainer>
      <RoomDetailWrapper>
        <RoomDescriptionWrapper>
          <h1>Room Title</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s
          </p>
        </RoomDescriptionWrapper>
        <UserProfileWrapper>
          <img src={userProfile} alt="user profile" />
          <h4>sebell</h4>
          <h5>참가인원 999</h5>
        </UserProfileWrapper>
        <MusicPlayerWrapper>
          <MusicPlayButtonWrapper>
            <BsPlayFill className="play-button" />
          </MusicPlayButtonWrapper>
          <CurrentMusicWrapper>
            <p>Arctic Monkeys - I Wanna Be yours</p>
          </CurrentMusicWrapper>
        </MusicPlayerWrapper>
      </RoomDetailWrapper>
      <ReactPlayer
        style={{ borderRadius: '30px' }}
        url="https://www.youtube.com/watch?v=SDTZ7iX4vTQ"
        playing={isPlaying}
        onEnded={handleOnEnded}
      />
    </RoomDetailContainer>
  );
}

export default RoomDetail;
