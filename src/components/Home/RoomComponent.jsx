import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { RxEnter } from 'react-icons/rx';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';
import useApiRequest from '../../hooks/useApiRequest';

const Container = styled.div`
  width: 300px;
  height: 420px;
  margin: 16px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }
  > img {
    width: 300px;
    height: 300px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

const RoomWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  > div {
    margin-left: ${({ theme }) => theme.spacing.small};
    > div {
      font-size: ${({ theme }) => theme.fontSize.subTitle};
    }
  }
`;

const StyledRiCheckboxBlankCircleFill = styled(RiCheckboxBlankCircleFill)`
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  color: #d9d9d9;
`;

const StyledRxEnter = styled(RxEnter)`
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  color: #d9d9d9;
`;

const StyledBsFileEarmarkMusicFill = styled(BsFileEarmarkMusicFill)`
  width: 100%;
  height: auto;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

function RoomComponent({ roomTitle, roomDescription, roomThumbnail, roomId }) {
  const navigate = useNavigate();
  const { apiRequest } = useApiRequest();
  const mutation = useMutation(apiRequest, {
    onSuccess: (data) => {
      console.log('POST 요청 성공:', data);
      navigate(`/rooms/${roomId}`, {
        state: {
          roomTitle,
          roomDescription,
          roomThumbnail,
        },
      });
    },
    onError: (error) => {
      console.error('POST 요청 실패:', error);
    },
  });
  const enterRoom = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mutation.mutate({
        method: 'post',
        url: `/rooms/${roomId}`,
        data: null,
        headers: { Authorization: `${token}` },
      });
    } else {
      console.error('토큰이 없습니다.');
      navigate('/login');
    }
  };

  return (
    <Container onClick={enterRoom}>
      {roomThumbnail ? <img src={roomThumbnail} alt="음악포스터" /> : <StyledBsFileEarmarkMusicFill />}
      <RoomWrapper>
        <TitleDescriptionWrapper>
          <StyledRiCheckboxBlankCircleFill />
          <div>
            <div>{roomTitle && roomTitle.length > 12 ? `${roomTitle.substring(0, 12)}...` : roomTitle}</div>
            <p>
              {roomDescription && roomDescription.length > 20
                ? `${roomDescription.substring(0, 20)}...`
                : roomDescription}
            </p>
          </div>
        </TitleDescriptionWrapper>

        <StyledRxEnter />
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
