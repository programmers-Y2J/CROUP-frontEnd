import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Avatar, AvatarImage } from '@ui/avatar';
import playImage from '@/assets/images/playlist.jpg';
import useApiRequest from '../../hooks/useApiRequest';

function RoomComponent({ thumbnail, title, tag, description, userName, roomId }) {
  const navigate = useNavigate();
  const { apiRequest } = useApiRequest();
  const mutation = useMutation(apiRequest, {
    onSuccess: (data) => {
      console.log('POST 요청 성공:', data);
      navigate(`/rooms/${roomId}`, {
        state: {
          title,
          description,
          thumbnail,
        },
      });
    },
    onError: (error) => {
      console.error('POST 요청 실패:', error);
    },
  });
  const enterRoom = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mutation.mutate({
        method: 'post',
        url: `/rooms/${roomId}`,
        data: null,
        headers: { Authorization: `${token}` },
      });
    } else {
      console.error('토큰이 없습니다.');
      navigate('/login');
    }
  };
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = playImage;
  };
  return (
    <button type="button" className="text-left" onClick={enterRoom}>
      <div className="flex flex-col gap-4 cursor-pointer bg-background rounded-lg shadow-lg w-[400px] shrink-0 hover:scale-[1.01] transition-transform duration-300">
        <img
          src={thumbnail}
          onError={handleImageError}
          width={400}
          height={225}
          alt="Thumbnail"
          className="rounded-t-lg object-cover aspect-video"
        />
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-black text-primary-foreground px-2 py-1 rounded-full text-sm font-medium">{tag}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
            </Avatar>
            <span className="text-sm font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export default RoomComponent;
