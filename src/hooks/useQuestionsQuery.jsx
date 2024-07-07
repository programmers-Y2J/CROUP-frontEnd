import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestionList = async (roomId) => {
  const token = localStorage.getItem('token');
  const list = await api.get(`/room/${roomId}/questions`, {
    headers: {
      Authorization: token,
    },
  });

  return list;
};

const useQuestionsQuery = (roomId, questionId) => {
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ['question', questionId],
    queryFn: () => getQuestionList(roomId),
  });

  return { data, isSuccess, isError, error };
};

export default useQuestionsQuery;
