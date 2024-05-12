import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LeftBar({ text }) {
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
      <TextWrapper dangerouslySetInnerHTML={{ __html: text }} />
    </SideContainer>
  );
}

LeftBar.propTypes = {
  // propTypes를 추가합니다.
  text: PropTypes.string.isRequired,
};

export default LeftBar;
