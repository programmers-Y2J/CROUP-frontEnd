import { useState } from 'react';
import { keyframes, styled } from 'styled-components';
import { useCurrentMusicStore } from '../../../stores/Room/useRoomStore';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PlayListItemContainer = styled.li`
  cursor: pointer;
`;

const PlayListItemBar = styled.div`
  width: 35px;
  height: 150px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color[100]};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${AppearAnimation} 0.8s ease;

  > h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    width: 15px;
    height: 80px;
    overflow: hidden;
    white-space: nowrap;
    writing-mode: vertical-lr;
    transform: rotateX(180deg);
    transform: rotateZ(180deg);
    letter-spacing: 1px;
  }
  > span {
    position: absolute;
    bottom: 5%;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.color.white};
    border-radius: 100px;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PlayListItemDetail = styled.div`
  width: 185px;
  height: 150px;
  padding-left: 15px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  animation: ${AppearAnimation} 0.8s ease;

  > img {
    width: 100px;
    height: 56px;
    border-radius: 10px;
  }

  > h4 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.white};
    width: 150px;
    height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
  }

  > h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.color.background};
  }
`;

function PlayListItem({ title, index, imgSrc, channel, videoId }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const order = index + 1;
  const { setCurrentMusic, setIsPlaying, currentMusic } = useCurrentMusicStore((state) => ({
    setCurrentMusic: state.setCurrentMusic,
    setIsPlaying: state.setIsPlaying,
    currentMusic: state.currentMusic,
  }));

  const isMatch = videoId === currentMusic.videoId;

  const handleItemClick = () => {
    setCurrentMusic({ title, videoId });
    setIsPlaying(true);
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <PlayListItemContainer onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleItemClick}>
      {isMouseOver || isMatch ? (
        <PlayListItemDetail>
          <img src={imgSrc} alt="video thumbnail" />
          <h4>{title}</h4>
          <h5>{channel}</h5>
        </PlayListItemDetail>
      ) : (
        <PlayListItemBar isMatch={isMatch}>
          <h5>{title}</h5>
          <span>{order < 10 ? `0${order}` : order}</span>
        </PlayListItemBar>
      )}
    </PlayListItemContainer>
  );
}

export default PlayListItem;
