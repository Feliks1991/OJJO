import React from 'react';
import styled from 'styled-components';
// import ContentLoader from 'react-content-loader';
import Icons from '../svg/Icons';

const ProductCardStyle = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    box-shadow: 11px 19px 16px 2px rgba(51, 51, 51, 0.31);
    transition: box-shadow 0.7s ease-in-out;
  }
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    margin: 25px 0 10px 0;
    text-transform: capitalize;
  }
  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #333333;
    margin-bottom: 15px;
    text-align: center;
  }
  div {
    font-weight: 500;
    font-size: 21px;
    line-height: 21px;
    text-transform: uppercase;
    color: #333333;
  }
`;

const ProductCardImage = styled.div`
  width: 280px;
  height: 220px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    display: none;
  }
  :hover {
    @keyframes slide {
      0% {
        bottom: 0;
        transform: translateX(50%);
      }
      100% {
        bottom: 50%;
      }
    }
    div {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 110px;
      bottom: 50%;
      right: 50%;
      transform: translate(50%, 50%);
      animation: slide 0.7s ease-in-out;
      button {
        display: flex;
        height: 50px;
        width: 50px;
        background-color: #333333;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
      }
    }
  }
`;

export default function ProductCard({ src, producer, label, price }) {
  return (
    <>
      {/* {loading ? (
        <ContentLoader
          speed={2}
          width={350}
          height={451}
          viewBox="0 0 350 451"
          backgroundColor="#f3f3f3"
          foregroundColor="#d9d9d9"
        >
          <rect x="35" y="35" rx="0" ry="0" width="280" height="220" />
          <rect x="139" y="362" rx="0" ry="0" width="73" height="21" />
          <rect x="45" y="314" rx="0" ry="0" width="260" height="33" />
          <rect x="147" y="280" rx="0" ry="0" width="56" height="24" />
        </ContentLoader>
      ) : ( */}
        <ProductCardStyle>
          <ProductCardImage>
            <img src={src} alt={label} />
            <div>
              <button type="button" href="/">
                <Icons name="LikedAdd" width="35" height="35" color="white" />
              </button>
              <button type="button" href="/">
                <Icons name="CartAdd" width="35" height="35" color="white" />
              </button>
            </div>
          </ProductCardImage>
          <p>{label}</p>
          <h5>{producer}</h5>
          <div>{price} ₽</div>
        </ProductCardStyle>
      {/* )} */}
    </>
  );
}
