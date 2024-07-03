import { styled } from 'styled-components';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { TypographyH1 } from '@ui/typography/TypographyH1';
import { TypographyP } from '@ui/typography/TypographyP';
import { TypographyH4 } from '@ui/typography/TypographyH4';
import { TypographySmallMuted } from '@ui/typography/TypographySmallMuted';
import { ScrollArea } from '@ui/scroll-area';
import { useCurrentMusicStore, usePlayListStore, useRoomDataStore } from '../../stores/Room/useAuthStore';
import PlayList from './PlayList/PlayList';
import MusicPlayer from './PlayList/MusicPlayer';

function RoomDetail() {
  const playList = usePlayListStore((state) => state.playList);
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = useCurrentMusicStore();
  const roomMemberCount = useRoomDataStore((state) => state.roomMemberCount);
  const roomData = useRoomDataStore((state) => state.roomData);

  const firstSong = { title: playList[0].musicTitle, videoId: playList[0].videoId };

  useEffect(() => {
    setCurrentMusic(firstSong);
  }, []);

  const handleOnEnded = () => {
    let nextMusic = 0;
    const currentMusicIndex = playList.findIndex((music) => music.videoId === currentMusic.videoId);

    if (currentMusicIndex === playList.length - 1) [nextMusic] = playList;
    else nextMusic = playList[currentMusicIndex + 1];

    setCurrentMusic({ title: nextMusic.musicTitle, videoId: nextMusic.videoId });
    setIsPlaying(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <RoomDetailContainer>
      <PlayerWrapper>
        <ReactPlayer
          width={860}
          height={495}
          url={`https://www.youtube.com/watch?v=${currentMusic.videoId}`}
          playing={isPlaying}
          controls={false}
          onEnded={handleOnEnded}
          onPlay={handlePlay}
          onPause={handlePause}
        />
        <RoomDetailWrapper>
          <RoomDescriptionWrapper>
            <TypographyH1>{roomData.title}</TypographyH1>
            <UserProfileWrapper>
              <TypographyH4>sebell</TypographyH4>
              <TypographySmallMuted>참가인원 {roomMemberCount}</TypographySmallMuted>
            </UserProfileWrapper>
            <TypographyP>{roomData.description}</TypographyP>
          </RoomDescriptionWrapper>
        </RoomDetailWrapper>
      </PlayerWrapper>
      <PlayListWrapper>
        <ScrollArea className="h-[495px]">
          <PlayList />
        </ScrollArea>
        <MusicPlayer />
      </PlayListWrapper>
    </RoomDetailContainer>
  );
}

const RoomDetailContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

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
  display: flex;
  flex-direction: column;
  gap: 10px;
  > p {
    width: 600px;
    height: 55px;
  }
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 30px;
    height: 30px;
  }
`;

const PlayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export default RoomDetail;
