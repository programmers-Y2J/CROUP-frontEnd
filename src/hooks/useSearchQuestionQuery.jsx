import { useQuery } from '@tanstack/react-query';
import api from '../util/api';

const getQuestion = async (roomId, searchKeyWord) => {
  const token = localStorage.getItem('token');
  const list = await api.get(`/room/${roomId}/questions/search?q=${searchKeyWord}`, {
    headers: {
      Authorization: token,
    },
  });

  return list;
};

const useSearchQuestionQuery = (roomId, searchKeyWord, enabled) => {
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ['question-search', roomId, searchKeyWord],
    queryFn: () => getQuestion(roomId, searchKeyWord),
    enabled,
  });

  return { data, isSuccess, isError, error };
};

export default useSearchQuestionQuery;
