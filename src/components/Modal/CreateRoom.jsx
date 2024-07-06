import { useQuery, useMutation } from 'react-query';
import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useApiRequest from '@/hooks/useApiRequest';
import { Avatar, AvatarImage } from '@ui/avatar';

// import RoomComponent from '../Home/RoomComponent';

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
      key: `${process.env.REACT_APP_YOUTUBE_API}`,
      maxResults: 50,
    },
    withCredentials: false,
  });
  console.log(response.data.items);
  return response.data.items.map((item) => ({
    musicChannelTitle: item.snippet.channelTitle,
    musicTitle: item.snippet.description,
    musicThumbnail: item.snippet.thumbnails.medium.url,
    videoId: item.snippet.resourceId.videoId,
  }));
};

function CreateRoom() {
  const [roomTitle, setRoomTitle] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [url, setUrl] = useState('');
  const [playList, setPlayList] = useState([]);
  const [tags, setTags] = useState('');

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

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };
  // const handleQnaChange = (e) => {
  //   setQna(e.target.value);
  // };

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
        tags,
      });
    } catch (error) {
      console.log(error);
      alert('방 생성에 실패했습니다');
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">방만들기</Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[800px] grid grid-cols-[1fr_290px] gap-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="방 제목을 입력해 주세요."
              value={roomTitle}
              onChange={handleTitleChange}
              type="text"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="resize-none"
              placeholder="방 설명을 입력해 주세요."
              rows={3}
              value={roomDescription}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              placeholder="카테고리A, 카테고리B, 카테고리C..."
              onChange={handleTagsChange}
              value={tags}
            />
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <div className="grid gap-2">
              <Label htmlFor="youtube">YouTube Url</Label>
              <Input
                id="youtube"
                placeholder="유튜브 재생목록 url을 입력해 주세요."
                value={url}
                onChange={handleUrlChange}
              />
            </div>
            <div className="flex items-end gap-2">
              <Button variant="outline" onClick={handleUrlConfirm}>
                확인
              </Button>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button onClick={handleMakeRoom}>생성</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 cursor-pointer bg-background rounded-lg shadow-lg w-[290px] shrink-0 hover:scale-[1.01] transition-transform duration-300">
          <img
            src={playList.length > 0 ? playList[0].musicThumbnail : '#'}
            width={400}
            height={225}
            alt="Thumbnail"
            className="rounded-t-lg object-cover aspect-video"
          />
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-black text-primary-foreground px-2 py-1 rounded-full text-sm font-medium">
                {tags}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{roomTitle}</h3>
            <p className="text-muted-foreground mb-3">{roomDescription}</p>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
              </Avatar>
              <span className="text-sm font-medium">{localStorage.getItem('nickName')}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateRoom;
