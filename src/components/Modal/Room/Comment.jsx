import { styled } from 'styled-components';

import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import Message from '../../Room/Chat/Message';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentList = styled.ul`
  width: 230px;
  height: 310px;
  padding-top: 20px;
  padding-left: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;

const CommentForm = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  gap: 5px;
  > input {
    width: 75%;
    height: 16px;
    padding: 3px 0 3px 10px;
    border: 1px solid #ccc;
    border-radius: 30px;
    outline: none;
  }
  input::placeholder {
    font-size: 0.8rem;
  }
  > button {
    background-color: #04314d;
    color: #fff;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 30px;
    cursor: pointer;
  }
`;

const postComment = async (roomId, questionId, userId, content) => {
  const result = await axios.post(`/rooms/${roomId}/question/${questionId}`, {
    userId,
    content,
  });
  return result;
};

function Comment({ comments, roomId, questionId }) {
  const comment = useRef();

  const userId = '';
  const submitComment = useMutation({ mutationFn: (content) => postComment(roomId, questionId, userId, content) });

  const handleClickSubmitButton = () => {
    submitComment.mutate(comment.current.value);
  };

  return (
    <CommentContainer>
      <CommentList>
        {comments.map((commentItem) => (
          <Message key={commentItem.id} user={commentItem.userName} message={commentItem.content} isMine={false} />
        ))}
      </CommentList>
      <CommentForm>
        <input type="text" placeholder="댓글을 입력해 주세요." ref={comment} />
        <button type="button" onClick={handleClickSubmitButton}>
          게시
        </button>
      </CommentForm>
    </CommentContainer>
  );
}

export default Comment;
