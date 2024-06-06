import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getRoomData = async (roomId) => {
  const result = await api.get(`/rooms/${roomId}`);
  return result;
};

const useRoomQuery = (roomId) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoomData(roomId),
    staleTime: Infinity,
  });

  return { data, isSuccess, isError };
};

export default useRoomQuery;
