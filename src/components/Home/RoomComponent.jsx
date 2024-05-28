import React from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';

const Container = styled.div`
  width: 30%;
  margin: 16px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  > img {
    max-width: 100%;
    width: 100%;
    max-height: 70%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const StyledBsFileEarmarkMusicFill = styled(BsFileEarmarkMusicFill)`
  max-width: 100%;
  width: 100%;
  max-height: 40%;
  font-size: 150px;
  margin-top: 20px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const StyledCircle = styled(RiCheckboxBlankCircleFill)`
  font-size: 2.5rem;
  color: #d1d1d1;
  margin-right: 15px;
`;

const Title = styled.div`
  white-space: normal;
  flex: 1;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const Description = styled.span`
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  margin-top: 10px;
  font-size: 0.8rem;
  color: #7c7b7b;
`;

function RoomComponent({ posterPath, title, description }) {
  return (
    <Container>
      {posterPath === '' ? <StyledBsFileEarmarkMusicFill /> : <img src={posterPath} alt="음악포스터" />}
      <RoomWrapper>
        <div>
          <StyledCircle />
          <Title>{title}</Title>
        </div>
        <Description>{description}</Description>
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
