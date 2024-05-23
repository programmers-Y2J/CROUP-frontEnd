import { styled } from 'styled-components';

import { useRef, useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import backIcon from '../../../assets/icons/back-arrow.svg';
import { useRoomContentStore, useRoomDataStore } from '../../../stores/Room/useRoomStore';

const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  > p {
    color: #fe6767;
    font-size: 0.8rem;
    margin-top: 5px;
  }
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
  margin-top: 35px;
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
  margin-top: 15px;
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
  margin-top: 20px;
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  &:focus {
    outline-style: none;
  }
`;

const postNewPost = async (title, description, roomId) => {
  const result = await axios.post(`/rooms/questions/:${roomId}`, { title, description });
  return result;
};

function NewPost() {
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const roomData = useRoomDataStore((state) => state.roomData);
  const setContent = useRoomContentStore((state) => state.setContent);
  const title = useRef();
  const description = useRef();

  const postQuestion = useMutation({
    mutationFn: () => postNewPost(title.current.value, description.current.value, roomData.roomId),
    onSuccess: () => {
      setIsTitleEmpty(false);
      setIsDescriptionEmpty(false);
      setContent('question');
    },
    onError: () => {
      console.log('error');
    },
  });

  const handleClickBack = () => {
    setContent('question');
  };

  const handleSubmitButton = () => {
    if (title.current.value.trim('').length === 0) return setIsTitleEmpty(true);
    if (description.current.value.trim('').length === 0) return setIsDescriptionEmpty(true);

    return postQuestion.mutate();
  };

  const handleInputChange = (setStateFn) => {
    setStateFn(false);
  };

  return (
    <NewPostContainer>
      <BackButton onClick={handleClickBack} type="button">
        <img src={backIcon} alt="back icon" />
      </BackButton>
      <TitleInput
        type="text"
        placeholder="제목을 입력해 주세요."
        ref={title}
        onChange={() => handleInputChange(setIsTitleEmpty)}
      />
      {isTitleEmpty && <p>제목을 입력해 주세요.</p>}
      <DescriptionArea ref={description} onChange={() => handleInputChange(setIsDescriptionEmpty)} />
      {isDescriptionEmpty && <p>질문 내용을 입력해 주세요.</p>}
      <PostButton type="button" onClick={handleSubmitButton}>
        게시
      </PostButton>
    </NewPostContainer>
  );
}

export default NewPost;
