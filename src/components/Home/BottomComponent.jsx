import React from 'react';
import styled from 'styled-components';

const BottomContainer = styled.div`
  height: 40vh;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > div {
    width: 25%;
  }
`;
function BottomComponent() {
  return (
    <BottomContainer>
      <div>
        <h2>Logo</h2>
        We&apos;re reimagining how you buy, sell
        <br /> and rent. It&apos;s now easier to get into
        <br /> a place you love. So let&apos;s do this,
        <br /> together
      </div>
      <div>
        Home
        <br />
        About
        <br />
        Property
        <br />
        Ongoing Project
        <br />
        Farmland
        <br />
        Contact
      </div>
      <div>
        Address
        <br />
        Riverside Building, County Hall,
        <br />
        London SE1 7PB, United Kingdom
        <br />
        (315) 905-1234
      </div>
    </BottomContainer>
  );
}

export default BottomComponent;
