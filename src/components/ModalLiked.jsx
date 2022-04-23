import React from 'react';
import styled from 'styled-components';
import Icons from '../svg/Icons';
import ModalWindow from './ModalWindow';
import GoodsContext from '../context/GoodsContext';

const ModalLikedItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px 10px 10px;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  width: 700px;
  div {
    display: flex;
  }
  img {
    height: 120px;
    width: 120px;
    margin-right: 20px;
    border: solid 1px #bbbbbb;
    border-radius: 15px;
  }
  p {
    font-weight: 800;
    font-size: 23px;
    line-height: 21px;
  }
  button {
    background: none;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #333333;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }
`;

export default function ModalLiked({ ...props }) {
  const { likedData, setLikedData } = React.useContext(GoodsContext);

  const unLiked = item => {
    setLikedData(prev => prev.filter(obj => obj.id !== item.id));
  };

  return (
    <ModalWindow {...props}>

      {likedData.map(item => (
        <ModalLikedItem>
          <div>
            <img src={item.src} alt={item.label} />
            <Title>
              <span>{item.label}</span>
              <p>{item.producer}</p>
            </Title>
          </div>

          <p>{item.price} ₽</p>
          <div>
            <button onClick={() => unLiked(item)} type="button">
              <Icons name="Unliked" width="20" height="20" color="#9B111E" />
            </button>
            <button  style={{ marginLeft: '10px' }} type="button">
              <Icons name="CartAdd" width="20" height="20" color="#333333" />
            </button>
          </div>
        </ModalLikedItem>
      ))}
    </ModalWindow>
  );
}
