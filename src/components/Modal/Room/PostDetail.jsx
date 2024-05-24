import { styled } from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import userProfile from '../../../assets/images/example-profile.svg';
import ModalCard from '../ModalCard';
import Comment from './Comment';

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

const getPostDetail = async (roomId, questionId) => {
  const result = await axios.get(`/rooms/${roomId}/question/${questionId}`);
  return result;
};

function PostDetail() {
  const navigate = useNavigate();
  const { roomId, questionId } = useParams();
  const { data, isSuccess, isError } = useQuery({
    queryKey: [`question-${questionId}`],
    queryFn: () => getPostDetail(roomId, questionId),
  });

  const handleCloseModal = () => {
    navigate(-1);
  };

  if (isError) console.log('post detail error');
  if (isSuccess) {
    return (
      <ModalCard isOpen close={handleCloseModal}>
        <PostDetailContainer>
          <PostDescriptionWrapper>
            <PostTitleWrapper>
              <PostTitle>{data.data.title}</PostTitle>
              <UserProfile>
                <img src={userProfile} alt="user-profile" />
                <h5>{data.data.userName}</h5>
              </UserProfile>
            </PostTitleWrapper>
            <PostDescription>{data.data.content}</PostDescription>
          </PostDescriptionWrapper>
          <Comment comments={data.data.comments} />
        </PostDetailContainer>
      </ModalCard>
    );
  }
}

export default PostDetail;
