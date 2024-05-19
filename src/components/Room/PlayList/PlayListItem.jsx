import { styled } from 'styled-components';

import thumbnail from '../../../assets/images/example-thumbnail.svg';

const PlayListItemContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  > img {
    width: 50px;
    height: 50px;
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

function PlayListItem() {
  return (
    <PlayListItemContainer>
      <h5>1</h5>
      <img src={thumbnail} alt="video thumbnail" />
      <ListItemDetailWrapper>
        <h4>Wonder - ADOY</h4>
        <p>channel name</p>
      </ListItemDetailWrapper>
    </PlayListItemContainer>
  );
}

export default PlayListItem;
