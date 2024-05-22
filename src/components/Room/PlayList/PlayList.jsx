import { styled } from 'styled-components';
import PlayListItem from './PlayListItem';
import { usePlayListStore, useRoomDataStore } from '../../../stores/Room/useRoomStore';

const PlayListContainer = styled.div`
  width: 430px;
  height: 500px;
  padding: 30px 0 0 50px;
  background: #def2ff;
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ListWrapper = styled.ul`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;

function PlayList() {
  const playList = usePlayListStore((state) => state.playList);
  const { host } = useRoomDataStore((state) => state.roomData);

  return (
    <PlayListContainer>
      <div>
        <h3>{`${host}'`}s Playlist</h3>
        <h4>Playlist Name</h4>
      </div>
      <ListWrapper>
        {playList.map((listItem, index) => (
          <PlayListItem
            key={listItem.id}
            index={index}
            imgSrc={listItem.snippet.thumbnails.medium.url}
            title={listItem.snippet.title}
            channel={listItem.snippet.channelTitle}
            videoId={listItem.snippet.resourceId.videoId}
          />
        ))}
      </ListWrapper>
    </PlayListContainer>
  );
}

export default PlayList;
