import { styled } from 'styled-components';
import { useRef, useState } from 'react';
import PlayListItem from './PlayListItem';
import { usePlayListStore } from '../../../stores/Room/useRoomStore';

const PlayListContainer = styled.ul`
  width: 1150px;
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  overflow: scroll;
  user-select: none;
`;

function PlayList() {
  const listContainer = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const playList = usePlayListStore((state) => state.playList);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - listContainer.current.offsetLeft);
    setScrollLeft(listContainer.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    event.stopPropagation();
    const x = event.pageX - listContainer.current.offsetLeft;
    const scrollSpeed = (x - startX) * 2;
    listContainer.current.scrollLeft = scrollLeft - scrollSpeed;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <PlayListContainer
      ref={listContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}>
      {playList.map((listItem, index) => (
        <PlayListItem
          key={listItem.videoId}
          index={index}
          imgSrc={listItem.musicThumbnail}
          title={listItem.musicTitle}
          channel={listItem.musicChannelTitle}
          videoId={listItem.videoId}
        />
      ))}
    </PlayListContainer>
  );
}

export default PlayList;
