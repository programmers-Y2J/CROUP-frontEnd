import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  font-size: 25px;
  font-weight: 900;
  padding-left: 40px;
  padding-top: 50px;
  & div:first-child {
    font-size: 50px;
  }
`;
function LeftBar({ text }) {
  return (
    <SideContainer>
      <TextWrapper dangerouslySetInnerHTML={{ __html: text }} />
    </SideContainer>
  );
}

LeftBar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LeftBar;
