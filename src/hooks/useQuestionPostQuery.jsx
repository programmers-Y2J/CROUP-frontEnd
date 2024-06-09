import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestionPostData = async (roomId, questionId) => {
  const result = await api.get(`/rooms/${roomId}/questions/${questionId}`);

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
