import React from "react";
import styled from "styled-components";
import LinkCard from "../components/LinkCard";
import SectionTitle from "../components/SectionTitle";
import Wrapper from "../components/Wrapper";

const HelpfulColumnsContainer = styled(Wrapper)`
  padding: 120px 0 100px 0;
`;

const LinkField = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
`;

export default function HelpfulColumns() {
  const ColumnsItem = [
    {
      src: "/images/Column_1.png",
      label: "Как выбрать часы для своей будущей жены",
    },
    {
      src: "/images/Column_2.png",
      label: "Запонки для мужа: 7 ключевых правил покупки аксессуара",
    },
    {
      src: "/images/Column_3.png",
      label: "Как выбрать обручальные кольца молодоженам",
    },
  ];

  return (
    <HelpfulColumnsContainer>
      <SectionTitle
        subtitle="Полезные статьи"
        title="Лучшие советы по подбору дорогих подарков"
      />

      <LinkField>
        {ColumnsItem.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LinkCard big key={i} src={item.src} label={item.label} />
        ))}
      </LinkField>
    </HelpfulColumnsContainer>
  );
}
