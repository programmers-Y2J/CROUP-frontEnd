import { styled } from 'styled-components';

import backIcon from '../../../assets/icons/back-arrow.svg';
import useRoomStore from '../../../stores/Room/useRoomStore';

const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  position: relative;
  gap: 20px;
`;

const BackButton = styled.button`
  background: none;
  > img {
    width: 2vmin;
    height: 2vmin;
    left: 1vmin;
    position: absolute;
    cursor: pointer;
  }
`;

const TitleInput = styled.input`
  width: 34vw;
  height: 5vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 1vw;
  font-size: 1rem;
  margin-top: 3vh;
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
  margin-right: 5vw;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #04314d;
    color: #fff;
  }
`;

const DescriptionArea = styled.textarea`
  width: 33vw;
  height: 23vh;
  padding: 1vh 1vw;
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
