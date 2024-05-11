import React from 'react';
import styled from 'styled-components';

function LeftBar() {
  const SideContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: left;
    align-items: center;
  `;
  const TextWrapper = styled.div`
    background-color: #00b3ff;
    height: 55vh;
    width: 40vw;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 50px;
    font-weight: bold;
    padding-left: 40px;
    padding-top: 100px;
  `;
  return (
    <SideContainer>
      <TextWrapper>
        즐거운 <br />
        집중을 위한
        <br /> 준비가 되셨나요 ?
      </TextWrapper>
    </SideContainer>
  );
}

export default LeftBar;
