import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../util/api';

const postQuestion = async (data) => {
  const token = localStorage.getItem('token');
  const result = await api.post(
    `/room/${data.roomId}/question`,
    { title: data.title, content: data.content },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return result;
};

const useQuestionPostMutation = (successCbFn, errorCbFn, roomId) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postQuestion,
    onSuccess: () => {
      successCbFn();
      queryClient.invalidateQueries(['room', roomId], { exact: true });
    },
    onError: () => {
      errorCbFn();
    },
  });

  return { mutation };
};

export default useQuestionPostMutation;
