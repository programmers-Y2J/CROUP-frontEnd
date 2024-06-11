import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.input`
  display: block;
  width: 320px;
  height: 35px;
  text-indent: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
function Input({ type, value, onChange, placeholder }) {
  return <InputContainer type={type} value={value} onChange={onChange} placeholder={placeholder} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
