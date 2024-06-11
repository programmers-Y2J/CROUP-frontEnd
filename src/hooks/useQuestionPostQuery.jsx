import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestionPostData = async (roomId, questionId) => {
  const token = localStorage.getItem('token');
  const result = await api.get(`/room/${roomId}/question/${questionId}`, {
    headers: {
      Authorization: token,
    },
  });

  return result;
};

const useQuetionPostQuery = (roomId, questionId) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['questionPost', questionId],
    queryFn: () => getQuestionPostData(roomId, questionId),
  });

  return { data, isSuccess, isError };
};

export default useQuetionPostQuery;
