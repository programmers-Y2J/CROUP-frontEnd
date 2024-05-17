import React from "react";
import styled from "styled-components";
import { RxEnter } from "react-icons/rx";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
function RoomComponent({ poster_path }) {
  const Container = styled.div`
    width: 30%;
    margin: 16px;
    border-radius: 30px;
    border: 1px solid #d9d9d9;
    > img {
      max-width: 100%;
      width: 100%;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
    }
  `;

  const RoomWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
    }
  `;

  const StyledRxEnter = styled(RxEnter)`
    font-size: 2rem;
    color: #d1d1d1;
  `;

  const StyledCircle = styled(RiCheckboxBlankCircleFill)`
    font-size: 2.5rem;
    color: #d1d1d1;
  `;
  return (
    <Container>
      <img src={poster_path} alt="영화포스터"></img>
      <RoomWrapper>
        <div>
          <StyledCircle />
          <div>
            Title
            <br />
            <span>description</span>
          </div>
        </div>
        <StyledRxEnter />
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
