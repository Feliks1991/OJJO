import React from 'react';
// import { Link } from "react-router-dom";
import styled from 'styled-components';
import Icons from '../svg/Icons';

const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  color: white;
  line-height: 21px;
  font-size: 14px;
`;

const LeftLinks = styled.div`
  display: flex;
  a:not(:last-child) {
    margin-right: 40px;
  }
`;
const LinkSearch = styled(Link)`
  margin-right: 40px;
  span {
    margin-left: 16px;
  }
`;
const LinkEnter = styled(Link)`
  margin-right: 30px;
  span {
    margin-right: 44px;
  }
`;
const RightLinks = styled.div`
  display: flex;
`;

export default function LinkRow() {
  return (
    <HeaderLinks>
      <LeftLinks>
        <Link href="/">Контрагентам</Link>
        <Link href="/">Дизайнерам</Link>
        <Link href="/">Вакансии</Link>
      </LeftLinks>
      <Link href="/">
        <Icons name="OJJO" width="216" height="54" color="white" />
      </Link>
      <RightLinks>
        <LinkSearch href="/">
          <Icons name="Search" width="18" height="18" color="white" />
          <span>Поиск</span>
        </LinkSearch>
        <LinkEnter href="/">
          <span>Вход/Регистрация</span>
          <Icons name="Account" width="16" height="16" color="white" />
        </LinkEnter>
        <Link href="/">
          <Icons name="Liked" width="16" height="16" color="white" />
        </Link>
      </RightLinks>
    </HeaderLinks>
  );
}
