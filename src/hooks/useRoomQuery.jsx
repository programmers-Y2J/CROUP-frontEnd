import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getRoomData = async (roomId) => {
  const token = localStorage.getItem('token');
  const result = await api.get(`/rooms/${roomId}`, {
    headers: {
      Authorization: token,
    },
  });

  return result;
};

const useRoomQuery = (roomId) => {
  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoomData(roomId),
    staleTime: Infinity,
  });
  return { data, error, isError, isSuccess };
};

export default useRoomQuery;
