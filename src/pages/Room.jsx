import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Outlet, useLocation } from 'react-router-dom';
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
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
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
    queryKey: [`room`],
    queryFn: () => getPlayList('RDCLAK5uy_kyZ7N5lM0kUpn7NbydMRujcq4aTEesP9I' || location.playListId),
    staleTime: 6000000,
  });

  const roomDataObj = {
    roomId: '123' || location.state.roomId,
    host: 'host' || location.state.host,
    playListId: 'RDCLAK5uy_kyZ7N5lM0kUpn7NbydMRujcq4aTEesP9I' || location.state.playListId,
    title: 'title' || location.state.title,
    description: 'description' || location.state.description,
  };

  if (isError) console.log('get playlist error');
  if (isSuccess) {
    setPlayList(data.data.items);
    setRoomData(roomDataObj);

    return (
      <RoomContainer>
        <RoomDetail />
        <RoomContent />
        <Outlet />
      </RoomContainer>
    );
  }
}

export default Room;
