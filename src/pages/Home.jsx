import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/Home/HeaderComponent";
import RoomListComponent from "../components/Home/RoomListComponent";
import BottomComponent from "../components/Home/BottomComponent";

function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    margin: auto;
  `;
  return (
    <HomeContainer>
      <HeaderComponent />
      <RoomListComponent />
      <BottomComponent />
    </HomeContainer>
  );
}

export default Home;
