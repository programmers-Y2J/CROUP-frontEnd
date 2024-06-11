import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../util/api';

const postComment = async (data) => {
  const token = localStorage.getItem('token');
  const result = await api.post(
    `/room/${data.roomId}/question/${data.questionId}/comments`,
    {
      title: data.title,
      content: data.content,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return result;
};

const useCommentMutation = (successCbFn, errorCbFn, questionId) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      successCbFn();
      queryClient.invalidateQueries(['question', questionId], { exact: true });
    },
    onError: (error) => {
      console.log(error);
      errorCbFn();
    },
  });

  return { mutation };
};

export default useCommentMutation;
