import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import RoomComponent from './RoomComponent';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 45vh;
  width: 50vw;
  border-radius: 20px;
  display: flex;
  padding: 80px;
  border: 1px solid #cccccc;
  justify-content: space-between;
  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer !important;
  }
`;

const MakeWrapper = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 45%;
  font-weight: bold;
  font-size: 0.8rem;
  > button {
    margin-left: auto;
    width: 80px;
    height: 30px;
    margin-top: 20px;
    border: 1px solid #cccccc;
    color: #cccccc;
    background-color: white;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  > input {
    border: 1px solid #cccccc;
    height: 35px;
    border-radius: 10px;
    padding-left: 15px;
    margin: 5px 0px 10px 0px;
  }
`;
const UrlWrapper = styled.div`
  display: flex;
  > input {
    border: 1px solid #cccccc;
    height: 35px;
    border-radius: 10px;
    padding-left: 15px;
    margin: 5px 0px 10px 0px;
    width: 80%;
  }
  > button {
    margin-left: auto;
    width: 50px;
    height: 35px;
    margin-top: 5px;
    margin-left: 5px;
    border: 1px solid #cccccc;
    color: #cccccc;
    background-color: white;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

function MakeRoomComponent({ openModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [playList, setPlayList] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlConfirm = () => {
    axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          playlistId: url,
          key: 'AIzaSyC_sd6OdADTPmpF4CiEZk3rHFhfkQInk38',
        },
      })
      .then((res) => {
        setPlayList(
          res.data.items.map((item) => {
            return {
              channel: item.snippet.channelId,
              title: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.standard.url,
              videoId: item.snippet.resourceId.videoId,
            };
          }),
        );
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert('플레이리스트를 불러오지 못했습니다.');
        setPlayList([]);
      });
  };

  const handleMakeRoom = () => {
    console.log(playList);
    axios
      .post(
        '/rooms',
        {
          title,
          description,
          playListUrl: url,
          playList,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        alert('방이 생성되었습니다');
        console.log(res);
      })
      .catch((error) => {
        alert('방 생성에 실패했습니다');
        console.log(error);
      });
  };

  return (
    <Container>
      <button type="button" onClick={openModal}>
        x
      </button>
      <MakeWrapper>
        방제목
        <input placeholder="제목을 입력해 주세요" value={title} onChange={handleTitleChange} />
        설명
        <input placeholder="설명을 입력해 주세요" value={description} onChange={handleDescriptionChange} />
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
        title={title === '' ? 'title을 입력하세요' : title}
        description={description === '' ? 'description을 입력하세요' : description}
        posterPath={playList.length === 0 ? '' : playList[0].thumbnailUrl}
      />
    </Container>
  );
}

export default MakeRoomComponent;
