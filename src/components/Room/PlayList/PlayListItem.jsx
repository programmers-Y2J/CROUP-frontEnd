import { styled } from 'styled-components';
import { useCurrentMusicStore } from '../../../stores/Room/useRoomStore';

const PlayListItemContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  > img {
    width: 100px;
    height: 56px;
    background-color: #ccc;
    border-radius: 8px;
  }
`;

const ListItemDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  > p {
    font-size: 0.7rem;
    color: #9d9d9d;
  }
`;

function PlayListItem({ index, imgSrc, title, channel, videoId }) {
  const setCurrentMusic = useCurrentMusicStore((state) => state.setCurrentMusic);

  const handleItemClick = () => {
    setCurrentMusic({ title, videoId });
  };
  return (
    <PlayListItemContainer onClick={handleItemClick}>
      <h5>{index + 1}</h5>
      <img src={imgSrc} alt="video thumbnail" />
      <ListItemDetailWrapper>
        <h4>{title}</h4>
        <p>{channel}</p>
      </ListItemDetailWrapper>
    </PlayListItemContainer>
  );
}

export default PlayListItem;
