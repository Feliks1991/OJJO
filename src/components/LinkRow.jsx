import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Icons from '../svg/Icons';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavbarItem = styled.a`
  display: flex;
  align-items: center;
  color: white;
  line-height: 21px;
  font-size: 14px;
`;

const LeftNavbarBlock = styled.div`
  display: flex;
  a:not(:last-child) {
    margin-right: 56px;
  }
`;
const NavbarItemSearch = styled(NavbarItem)`
  margin-right: 34px;
  span {
    margin-left: 10px;
  }
`;
const NavbarItemEnter = styled(NavbarItem)`
  margin-right: 30px;
  span {
    margin-right: 10px;
  }
`;
const RightNavbarBlock = styled.div`
  display: flex;
  a:last-child{
    margin-left: 30px;
  }
`;

export default function LinkRow({...props}) {
  return (
    <Navbar>
      <LeftNavbarBlock>
        <NavbarItem href="#">Контрагентам</NavbarItem>
        <NavbarItem href="#">Дизайнерам</NavbarItem>
        <NavbarItem href="#">Вакансии</NavbarItem>
      </LeftNavbarBlock>
      <Link to="/main">
        <Icons name="OJJO" width="216" height="54" color="white" />
      </Link>
      <RightNavbarBlock>
        <NavbarItemSearch href="#">
          <Icons name="Search" width="18" height="18" color="white" />
          <span>Поиск</span>
        </NavbarItemSearch>
        <NavbarItemEnter onClick={props.openEnter} href="#">
          <span>Вход/Регистрация</span>
          <Icons name="Account" width="16" height="16" color="white" />
        </NavbarItemEnter>
        <NavbarItem onClick={props.openLiked}  href="#">
          <Icons name="Liked" width="16" height="16" color="white" />
        </NavbarItem>
        <NavbarItem onClick={props.openCart}  href="#">
          <Icons name="Cart" width="16" height="16" color="white" />
        </NavbarItem>
      </RightNavbarBlock>
    </Navbar>
  );
}
