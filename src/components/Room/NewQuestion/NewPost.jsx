import { styled } from 'styled-components';

import backIcon from '../../../assets/icons/back-arrow.svg';
import useRoomStore from '../../../stores/Room/useRoomStore';

const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 20px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: none;
  > img {
    width: 18px;
    height: 18px;
    left: 10px;
    position: absolute;
    cursor: pointer;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 15px;
  font-size: 1rem;
  margin-top: 20px;
  &::placeholder {
    font-size: 1.1rem;
    color: #ccc;
  }
  &:focus {
    outline-style: none;
  }
`;

const PostButton = styled.button`
  background: none;
  padding: 5px 20px;
  border: 1px solid #ccc;
  border-radius: 30px;
  color: #ccc;
  margin-left: auto;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #04314d;
    color: #fff;
  }
`;

const DescriptionArea = styled.textarea`
  width: 94%;
  height: 300px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  &:focus {
    outline-style: none;
  }
`;

function NewPost() {
  const setContent = useRoomStore((state) => state.setContent);

  const handleClickBack = () => {
    setContent('question');
  };

  return (
    <NewPostContainer>
      <BackButton onClick={handleClickBack} type="button">
        <img src={backIcon} alt="back icon" />
      </BackButton>
      <TitleInput type="text" placeholder="제목을 입력해 주세요." />
      <DescriptionArea />
      <PostButton type="button">게시</PostButton>
    </NewPostContainer>
  );
}

export default NewPost;
