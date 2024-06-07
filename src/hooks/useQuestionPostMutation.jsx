import { useMutation } from '@tanstack/react-query';
import api from '../util/api';

const postQuestion = async (data) => {
  const result = await api.post(`/rooms/${data.roomId}/questions`, { title: data.title, content: data.content });
  return result;
};

const useQuestionPostMutation = (successCbFn, errorCbFn) => {
  const mutation = useMutation({
    mutationFn: postQuestion,
    onSuccess: () => {
      successCbFn();
    },
    onError: () => {
      errorCbFn();
    },
  });

  return { mutation };
};

export default useQuestionPostMutation;
