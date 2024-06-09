import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getRoomData = async (roomId) => {
  const result = await api.get(`/rooms/${roomId}`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVjNmVmN2IyODlkNzIyNzRkOWI4MDYiLCJuaWNrTmFtZSI6InRlc3QxMjMiLCJpYXQiOjE1MTYyMzkwMjJ9.zwgnshrBi7H7DhOhyfvnNtUoVCv4GTT8xmTSzooAcE2k-E9Obpzk-xeWgTGdJaurP_3I_yR9nOo0ZQGhWQoWYQ',
    },
  });

  return result;
};

const useRoomQuery = (roomId) => {
  const { data, isError, isSuccess } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoomData(roomId),
    staleTime: Infinity,
  });

  return { data, isError, isSuccess };
};

export default useRoomQuery;
