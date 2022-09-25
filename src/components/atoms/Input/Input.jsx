import React from 'react';
import { StyledInput } from './Input.styled';
const Input = ({ type, placeholder, primary }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} primary={primary} />
  );
};

export default Input;
