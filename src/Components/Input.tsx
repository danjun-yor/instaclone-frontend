import React, { ChangeEvent } from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  type = "text",
  onChange
}: {
  placeholder: string;
  required?: boolean;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    type={type}
    onChange={onChange}
  />
);

export default Input;
