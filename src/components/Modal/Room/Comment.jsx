import { styled } from 'styled-components';

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

function Comment({ comments }) {
  return (
    <CommentContainer>
      <CommentList>
        {comments.map((comment) => (
          <Message key={comment.id} user={comment.userName} message={comment.content} isMine={false} />
        ))}
      </CommentList>
      <CommentForm>
        <input type="text" placeholder="댓글을 입력해 주세요." />
        <button type="button">게시</button>
      </CommentForm>
    </CommentContainer>
  );
}

export default Comment;
