import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/Home/HeaderComponent";
import RoomListComponent from "../components/Home/RoomListComponent";

function Home() {
  const HomeContainer = styled.div`
    text-align: center;
    width: 70vw;
    height: 100vh;
    margin: auto;
  `;
  return (
    <HomeContainer>
      <HeaderComponent />
      <RoomListComponent />
    </HomeContainer>
  );
}

export default Home;
