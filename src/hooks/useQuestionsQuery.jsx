import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestionList = async (roomId) => {
  const list = await api.get(`/rooms/${roomId}/questions`);

  return list;
};

const useQuestionsQuery = (roomId) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['question', roomId],
    queryFn: () => getQuestionList(roomId),
  });

  return { data, isSuccess, isError };
};

export default useQuestionsQuery;
