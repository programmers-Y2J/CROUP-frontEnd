import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestionDetailData = async (roomId, questionId) => {
  const token = localStorage.getItem('token');
  const result = await api.get(`/room/${roomId}/question/${questionId}`, {
    headers: {
      Authorization: token,
    },
  });

  return result;
};

const useQuestionDetailQuery = (roomId, questionId) => {
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ['questionPost', questionId],
    queryFn: () => getQuestionDetailData(roomId, questionId),
  });

  return { data, isSuccess, isError, error };
};

export default useQuestionDetailQuery;
