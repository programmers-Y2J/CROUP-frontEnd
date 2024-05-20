import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.input`
  display: block;
  margin-bottom: 30px;
  margin-top: 25px;
  width: 320px;
  height: 35px;
  border: 1px solid black;
  text-indent: 10px;
`;
function Input({ type, value, onChange, placeholder }) {
  return <InputContainer type={type} value={value} onChange={onChange} placeholder={placeholder} />;
}

Input.propTypes = {
  // propTypes를 추가합니다.
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
