import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Center from "../components/Center";
import SectionTitle from "../components/SectionTitle";
import Wrapper from "../components/Wrapper";

const StoreContainer = styled(Wrapper)`
  padding: 100px 0;
  background-image: url(/images/Store-bg.png);
  p {
    width: 730px;
    height: 100px;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    text-align: center;
    color: #ffffff;
    padding-bottom: 60px;
  }
`;

export default function Store() {
  return (
    <StoreContainer>
      <SectionTitle
        subtitle="Не знаете, что выбрать?"
        title="Посетите наши салоны в Москве"
        white
      />
      <Center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
          tortor vitae pellentesque egestas quam pulvinar. Pellentesque
          porttitor velit sit pellentesque. Suspendisse donec pretium id
          dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut
          ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi
          libero viverra ipsum.
        </p>
        <Button large>наши салоны</Button>
      </Center>
    </StoreContainer>
  );
}
