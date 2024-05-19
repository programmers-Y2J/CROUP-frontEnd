import React from "react";
import styled from "styled-components";
import RoomComponent from "./RoomComponent";

function MakeRoomComponent({ openModal }) {
  const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 45vh;
    width: 50vw;
    border-radius: 20px;
    display: flex;
    padding: 80px;
    border: 1px solid #cccccc;
    justify-content: space-between;
    > button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer !important;
    }
  `;

  const MakeWrapper = styled.form`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 45%;
    font-weight: bold;
    font-size: 0.8rem;
    > button {
      margin-left: auto;
      width: 80px;
      height: 30px;
      margin-top: 20px;
      border: 1px solid #cccccc;
      color: #cccccc;
      background-color: white;
      border-radius: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    > input {
      border: 1px solid #cccccc;
      height: 35px;
      border-radius: 10px;
      padding-left: 15px;
      margin: 5px 0px 10px 0px;
    }
  `;

  return (
    <Container>
      <button onClick={openModal}>x</button>
      <MakeWrapper>
        방제목
        <input placeholder="제목을 입력해 주세요" />
        설명
        <input placeholder="설명을 입력해 주세요" />
        재생목록 url
        <input placeholder="Youtube 재생목록 주소(url)을 입력해주세요" />
        <button>생성</button>
      </MakeWrapper>
      <RoomComponent poster_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb00Eq6NLKK4KmU67aDCWKHmw63m3CH3rVcojJwAVZLw&s" />
    </Container>
  );
}

export default MakeRoomComponent;
