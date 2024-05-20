import { styled } from 'styled-components';
import PlayListItem from './PlayListItem';

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
  return (
    <PlayListContainer>
      <div>
        <h3>Sebell{`'`}s Playlist</h3>
        <h4>Playlist Name</h4>
      </div>
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
