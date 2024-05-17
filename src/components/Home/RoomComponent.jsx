import React from "react";
import styled from "styled-components";

function RoomComponent({ title, poster_path, vote_average }) {
  const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";
  const Container = styled.div`
    width: 30%;
    margin: 16px;
    border-radius: 30px;
    border: 1px solid #d9d9d9;
    > img {
      max-width: 100%;
    }
  `;

  const RoomWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <Container>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터"></img>
      <RoomWrapper>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </RoomWrapper>
    </Container>
  );
}

export default RoomComponent;
