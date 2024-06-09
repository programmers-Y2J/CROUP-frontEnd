import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestionList = async (roomId) => {
  const list = await api.get(`/rooms/${roomId}/questions`);

  return list;
};

const useQuestionsQuery = (roomId, questionId) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['question', questionId],
    queryFn: () => getQuestionList(roomId),
  });

  return { data, isSuccess, isError };
};

export default useQuestionsQuery;
