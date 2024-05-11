import React from 'react';
import styled from 'styled-components';

function Input() {
  const InputContainer = styled.input`
    display: block;
    margin-bottom: 30px;
    margin-top: 20px;
    width: 320px;
    height: 35px;
    border: 1px solid black;
  `;
  return <InputContainer />;
}

export default Input;
