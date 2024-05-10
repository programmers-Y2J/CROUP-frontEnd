import { styled } from 'styled-components';
import PlayListItem from './PlayListItem';

const PlayListContainer = styled.div`
  width: 25vw;
  height: 53vh;
  padding: 5vmin 0 0 7vmin;
  background: #def2ff;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PlayListDetailWrapper = styled.div``;
const ListWrapper = styled.ul`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;

function PlayList() {
  return (
    <PlayListContainer>
      <PlayListDetailWrapper>
        <h3>Sebell{`'`}s Playlist</h3>
        <h4>Playlist Name</h4>
      </PlayListDetailWrapper>
      <ListWrapper>
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </ListWrapper>
    </PlayListContainer>
  );
}

export default PlayList;
