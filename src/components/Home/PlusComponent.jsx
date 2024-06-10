import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Container = styled.div`
  width: 300px;
  height: 420px;
  margin: 16px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.placeholder};
`;
function PlusComponent({ openModal }) {
  return (
    <Container onClick={openModal}>
      <FaPlus />
    </Container>
  );
}

export default PlusComponent;
