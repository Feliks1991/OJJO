import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: ${(props) => (props.large ? "15px 35px" : "10px 20px")};
  background: ${(props) => (props.dark ? "#333333" : "#F9F9F9")};
  border: 1px solid ${(props) => (props.dark ? "#FFFFFF" : "#D6D6D6")};
  color: ${(props) => (props.dark ? "#F9F9F9" : "#333333")};
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
`;

export default function Button({ ...props }) {
  return <ButtonStyle type="button" {...props}/>;
}
