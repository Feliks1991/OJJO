import React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const MailingContainer = styled(Wrapper)`
  padding: 100px 0 120px 0;
  background-image: url(/images/Store-bg.png);
`;

const MailingContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ul {
    list-style-image: url(/images/marker_1.png);
    list-style-type: none;
    font-family: Gilroy;

    li {
      font-weight: normal;
      font-size: 18px;
      line-height: 140%;
      color: #ffffff;
      text-indent: 20px;
      :not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }
`;
const MailingForm = styled.div`
  border: 1px solid #ffffff;
  padding: 14px 15px;
  margin-left: 80px;
  div {
    background: #ffffff;
    padding: 20px 22px;
  }
  input {
    margin-right: 15px;
    width: 200px;
    height: 45px;
    padding-left: 20px;
    background: #ffffff;
    border: 1px solid #d6d6d6;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(51, 51, 51, 0.5);
  }
`;

export default function Mailing() {
  return (
    <MailingContainer>

        <SectionTitle
          white
          subtitle="Полезные советы и персональный предложения"
          title="Эксклюзивная рассылка"
        />
   
      <MailingContent>
        <ul>
          <li>Личный менеджер</li>
          <li>Доставка и оформление</li>
          <li>Индивидуальный дизайн</li>
        </ul>
        <MailingForm>
          <div>
            <input type="text" placeholder="Ваш e-mail" />
            <Button dark large>отправить</Button>
          </div>
        </MailingForm>
      </MailingContent>
    </MailingContainer>
  );
}
