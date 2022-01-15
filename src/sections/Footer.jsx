import React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Icons from '../svg/Icons';
import Line from "../components/Line";

const FooterContainer = styled(Wrapper)`
  padding: 80px 0 20px 0;
`;

const FooterBlock = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
`;

const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const ItemsTitle = styled.h3`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #333333;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #333333;
`;

const UsefulLinks = styled(FooterBlock)`
  a {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const Pay = styled(FooterBlock)`
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 21px;
  }
  div {
    display: flex;
    align-items: center;
    img {
      width: 45px;
      height: 30px;
      :not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;

const Contacts = styled(FooterBlock)`
  a {
    margin-left: 20px;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
  }
  div:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Social = styled(Pay)`
  a:not(:last-child) {
    margin-right: 25px;
  }
`;

const FooterBottomLinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  a,
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <UsefulLinks>
          <ItemsTitle>Полезные ссылки</ItemsTitle>
          <a href="/">Доставка</a>
          <a href="/">Оплата </a>
          <a href="/">Акции</a>
          <a href="/">Политика конфиденциальности</a>
        </UsefulLinks>

        <Pay>
          <ItemsTitle>оплата</ItemsTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            justo, nec, pellentesque.
          </p>
          <div>
            <img src="/images/Visa.png" alt="Visa" />
            <img src="/images/Master_card.png" alt="MasterCard" />
          </div>
        </Pay>

        <Contacts>
          <ItemsTitle>контакты</ItemsTitle>
          <div>
            <Icons name="Phone" width="19" height="16" color="#333333" />
            <a href="tel:8 (812) 234-56-55">8 (812) 234-56-55</a>
          </div>
          <div>
            <Icons name="Phone" width="19" height="16" color="#333333" />
            <a href="tel:8 (812) 234-56-55">8 (812) 234-56-55</a>
          </div>
          <div>
            <Icons name="Letter" width="18" height="12" color="#333333" />
            <a href="mailto:ojjo@ojjo.ru">ojjo@ojjo.ru</a>
          </div>
        </Contacts>

        <Social>
          <ItemsTitle>социальные сети</ItemsTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            justo, nec, pellentesque.
          </p>
          <div>
            <a href="/">
              <Icons name="YouTube" width="23" height="16" color="#333333" />
            </a>
            <a href="/">
              <Icons name="VK" width="24" height="14" color="#333333" />
            </a>
            <a href="/">
              <Icons name="Facebook" width="10" height="19" color="#333333" />
            </a>
            <a href="/">
              <Icons name="Telegram" width="20" height="17" color="#333333" />
            </a>
            <a href="/">
              <Icons name="Etsy" width="14" height="16" color="#333333" />
            </a>
          </div>
        </Social>

      </FooterItems>

      <Line dark />

      <FooterBottomLinkRow>
        <p>(c) 2021 OJJO jewelry</p>
        <a href="/">Договор публичной офферты</a>
        <a href="/">Контрагентам</a>
        <a href="/">Сделано Figma.info</a>
      </FooterBottomLinkRow>
      
    </FooterContainer>
  );
}
