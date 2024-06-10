import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideContainer = styled.div`
  margin-left: 200px;
  margin-top: 100px;
  width: 600px;
  height: 550px;
  background-color: ${({ theme }) => theme.color.primary};
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;
const TextWrapper = styled.div`
  padding-top: 90px;
  padding-left: 60px;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  & div:first-child {
    font-size: ${({ theme }) => theme.fontSize.title};
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
