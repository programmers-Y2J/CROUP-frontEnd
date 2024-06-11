import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

import RoomComponent from './RoomComponent';
import useApiRequest from '../../hooks/useApiRequest';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 850px;
  border-radius: 20px;
  display: flex;
  padding: 80px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.background};

  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    font-size: 20px;
    cursor: pointer !important;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const MakeWrapper = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  > button {
    margin-left: auto;
    width: 100px;
    height: 25px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.bold};
  }
  > input {
    margin-top: 10px;
    margin-bottom: 10px;

    width: 300px;
    height: 30px;
    border-radius: 5px;
    padding-left: ${({ theme }) => theme.spacing.medium};
    border: 1px solid ${({ theme }) => theme.color.placeholder};
  }
`;

const UrlWrapper = styled.div`
  display: flex;
  > input {
    height: 30px;
    border-radius: 5px;
    width: 80%;
    padding-left: ${({ theme }) => theme.spacing.medium};
    border: 1px solid ${({ theme }) => theme.color.placeholder};
    margin-top: 10px;
  }
  > button {
    margin-left: auto;
    width: 50px;
    height: 30px;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.color.placeholder};
    color: ${({ theme }) => theme.color.placeholder};
    background-color: ${({ theme }) => theme.color.background};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const extractPlaylistID = (url) => {
  const regex = /[&?]list=([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const fetchPlaylist = async (url) => {
  const playlistId = extractPlaylistID(url);
  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      part: 'snippet',
      playlistId,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
    withCredentials: false,
  });
  console.log(response.data.items);
  return response.data.items.map((item) => ({
    musicChannelTitle: item.snippet.channelId,
    musicTitle: item.snippet.description,
    musicThumbnail: item.snippet.thumbnails.standard.url,
    videoId: item.snippet.resourceId.videoId,
  }));
};

function MakeRoomComponent({ openModal }) {
  const [roomTitle, setRoomTitle] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [url, setUrl] = useState('');
  const [playList, setPlayList] = useState([]);

  const { apiRequest } = useApiRequest();

  const handleTitleChange = (e) => {
    setRoomTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setRoomDescription(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const { refetch: refetchPlaylist } = useQuery(['playlist', url], () => fetchPlaylist(url), {
    enabled: false,
    onSuccess: (data) => {
      console.log(data);
      setPlayList(data);
    },
    onError: (fetchError) => {
      console.error(fetchError);
      alert('플레이리스트를 불러오지 못했습니다.');
      setPlayList([]);
    },
  });

  const handleUrlConfirm = () => {
    refetchPlaylist();
  };

  const mutation = useMutation(
    (data) =>
      apiRequest({
        method: 'post',
        url: '/rooms',
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
      }),
    {
      onSuccess: (data) => {
        alert('방이 생성되었습니다');
        openModal();
        console.log(data);
      },
    },
  );

  const handleMakeRoom = async () => {
    try {
      await mutation.mutateAsync({
        roomTitle,
        roomDescription,
        playListUrl: url,
        playList,
      });
    } catch (error) {
      console.log(error);
      alert('방 생성에 실패했습니다');
    }
  };

  return (
    <Container>
      <button type="button" onClick={openModal}>
        x
      </button>
      <MakeWrapper>
        방제목
        <input placeholder="제목을 입력해 주세요" value={roomTitle} onChange={handleTitleChange} />
        설명
        <input placeholder="설명을 입력해 주세요" value={roomDescription} onChange={handleDescriptionChange} />
        재생목록 url
        <UrlWrapper>
          <input placeholder="Youtube 재생목록 주소(url)을 입력해주세요" value={url} onChange={handleUrlChange} />
          <button type="button" onClick={handleUrlConfirm}>
            확인
          </button>
        </UrlWrapper>
        <button type="button" onClick={handleMakeRoom}>
          생성
        </button>
      </MakeWrapper>
      <RoomComponent
        roomTitle={roomTitle === '' ? 'title' : roomTitle}
        roomDescription={roomDescription === '' ? 'description' : roomDescription}
        roomThumbnail={playList.length === 0 ? '' : playList[0].musicThumbnail}
      />
    </Container>
  );
}

export default MakeRoomComponent;
