import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../util/api';

const postComment = async (data) => {
  const result = await api.post(`/room/${data.roomId}/questions/${data.questionId}/comments`, {
    title: data.title,
    content: data.content,
  });
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
    onError: () => {
      errorCbFn();
    },
  });

  return { mutation };
};

export default useCommentMutation;
