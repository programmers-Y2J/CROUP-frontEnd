import { styled } from 'styled-components';

import userProfile from '../../assets/images/example-profile.svg';
import Message from '../Room/Chat/Message';

const PostDetailContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const PostDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostTitleWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const PostTitle = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PostDescription = styled.div`
  width: 450px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;

const CommentWrapper = styled.div`
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

function PostDetail() {
  return (
    <PostDetailContainer>
      <PostDescriptionWrapper>
        <PostTitleWrapper>
          <PostTitle />
          <UserProfile>
            <img src={userProfile} alt="user-profile" />
            <h5>username</h5>
          </UserProfile>
        </PostTitleWrapper>
        <PostDescription />
      </PostDescriptionWrapper>
      <CommentWrapper>
        <CommentList>
          <Message user="user" message="message" />
        </CommentList>
        <CommentForm>
          <input type="text" placeholder="댓글을 입력해 주세요." />
          <button type="button">게시</button>
        </CommentForm>
      </CommentWrapper>
    </PostDetailContainer>
  );
}

export default PostDetail;
