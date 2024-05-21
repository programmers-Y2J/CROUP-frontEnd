import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import { usePlayListStore, useRoomDataStore } from '../stores/Room/useRoomStore';

import RoomDetail from '../components/Room/RoomDetail';
import RoomContent from '../components/Room/RoomContent';

const RoomContainer = styled.div`
  width: 1300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const getPlayList = async (playlistId) => {
  const playListData = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      part: 'snippet',
      playlistId: `${playlistId}`,
      key: 'key',
      maxResults: 50,
    },
  });
  return playListData;
};

function Room() {
  const setPlayList = usePlayListStore((state) => state.setPlayList);
  const setRoomData = useRoomDataStore((state) => state.setRoomData);

  const location = useLocation();

  const { data, isSuccess, isError } = useQuery({
    queryKey: [`123`],
    queryFn: () => getPlayList(location.playListId),
    staleTime: 6000000,
  });

  const roomDataObj = {
    roomId: location.state.roomId,
    host: location.state.host,
    playListId: location.state.playListId,
    title: location.state.title,
    description: location.state.description,
  };

  if (isError) console.log('get playlist error');
  if (isSuccess) {
    setPlayList(data.data.items);
    setRoomData(roomDataObj);
    return (
      <RoomContainer>
        <RoomDetail />
        <RoomContent />
      </RoomContainer>
    );
  }
}

export default Room;
