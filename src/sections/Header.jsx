import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Wrapper from '../components/Wrapper';
import Center from '../components/Center';
import Button from '../components/Button';
import LinkRow from '../components/LinkRow';
import ModalLiked from '../components/ModalLiked';
import ModalCart from '../components/ModalCart';
import ModalEnter from '../components/ModalEnter';

const HeaderContainer = styled(Wrapper)`
  background: #333333;
  padding: 27px 0 31px 0;
`;

const MainHeaderContainer = styled(Wrapper)`
  background: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.87),
      rgba(51, 51, 51, 0.87)
    ),
    url('images/bgc.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 25px 0 30px 0;
  h1 {
    margin: 523px 0 50px 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
  }
`;

const Brand = styled.div`
  display: flex;
  justify-content: center;
  a:not(:last-child) {
    border-right: 1px solid #ffffff;
    padding-right: 15px;
  }
  a:not(:first-child) {
    padding-left: 15px;
  }
`;

const LineStyle = styled(Line)`
  margin: 80px 0 30px 0;
`;

export default function Header({ ...props }) {
  const [modalLikedOpened, setModalLikedOpened] = React.useState(false);
  const [modalCartOpened, setModalCartOpened] = React.useState(false);
  const [modalEnterOpened, setModalEnterOpened] = React.useState(false);

  const modalLikedSwitch = () => {
    setModalLikedOpened(!modalLikedOpened);
    console.log('Переключатель понравилось');
  };
  const modalCartSwitch = () => {
    setModalCartOpened(!modalCartOpened);
    console.log('Переключатель корзина');
  };
  const modalEnterSwitch = () => {
    setModalEnterOpened(!modalEnterOpened);
    console.log('Переключатель вход');
  };

  return (
    <>
      {modalLikedOpened && <ModalLiked close={modalLikedSwitch} />}
      {modalCartOpened && <ModalCart close={modalCartSwitch} />}
      {modalEnterOpened && <ModalEnter close={modalEnterSwitch} />}

      {props.shortHeader ? (
        <HeaderContainer>
          <LinkRow
            openLiked={modalLikedSwitch}
            openCart={modalCartSwitch}
            openEnter={modalEnterSwitch}
          />
        </HeaderContainer>
      ) : (
        <MainHeaderContainer>
          <LinkRow
            openLiked={modalLikedSwitch}
            openCart={modalCartSwitch}
            openEnter={modalEnterSwitch}
          />
          <Center>
            <h1>Долго, дорого, богато!</h1>
            <Link to="/products">
              <Button large dark>
                каталог изделий
              </Button>
            </Link>
          </Center>
          <LineStyle />
          <Brand>
            <a href="/">
              <img src="images/brand.png" alt="" />
            </a>
            <a href="/">
              <img src="images/brand.png" alt="" />
            </a>
            <a href="/">
              <img src="images/brand.png" alt="" />
            </a>
            <a href="/">
              <img src="images/brand.png" alt="" />
            </a>
            <a href="/">
              <img src="images/brand.png" alt="" />
            </a>
            <a href="/">
              <img src="images/brand.png" alt="" />
            </a>
          </Brand>
        </MainHeaderContainer>
      )}
    </>
  );
}
