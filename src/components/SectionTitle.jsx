import React from "react";
import styled from "styled-components";
import Center from "./Center";

const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 21px;
  line-height: 140%;
  color: ${(props) => (props.white ? "#FFFFFF" : "#333333")};
  margin-top: 15px;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  color: ${(props) => (props.white ? "#FFFFFF" : "#333333")};
  margin-bottom: 60px;
`;

export default function SectionTitle({ ...props }) {
  return (
    <Center>
      <Subtitle {...props}>{props.subtitle}</Subtitle>
      <Title {...props}>{props.title}</Title>
    </Center>
  );
}
