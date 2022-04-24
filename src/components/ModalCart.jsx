import React from 'react';
import styled from 'styled-components';
import GoodsContext from '../context/GoodsContext';
import Icons from '../svg/Icons';
import ModalWindow from './ModalWindow';
import Button from './Button';

const ModalCartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px 10px 10px;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  width: 700px;
  overflow: auto;
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

const ItemsField = styled.div`
  overflow: auto;
  height: 500px;
  padding: 0 20px 0 20px;
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

const QuantityControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  div {
    display: flex;
    align-items: center;
  }
  button {
    background: none;
    height: 16px;
  }
  input {
    margin: 0 5px;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: solid 1px #bbbbbb;
    text-align: center;
  }
  span {
    position: absolute;
    top: 40px;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #333333;
  }
`;

const OrderField = styled.div`
  background-image: url(images/Store-bg.png);
  background-color: #333333;
  width: 100%;
  height: 200px;
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  div {
    border: 1px solid #ffffff;
    padding: 14px 15px;
    div {
      background: #ffffff;
      padding: 20px 22px;

      input {
        width: 200px;
        height: 39px;
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
    }
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #ffffff;
    margin-bottom: 15px;
  }
`;

export default function ModalCart({ ...props }) {
  const { cartData, setCartData } = React.useContext(GoodsContext);

  const unCart = item => {
    setCartData(prev => prev.filter(obj => obj.id !== item.id));
  };

  const increaseCartCount = item => {
    setCartData(prev =>
      prev.map(obj =>
        obj.id === item.id ? { ...obj, count: obj.count + 1 } : obj
      )
    );
  };

  const decreaseCartCount = item => {
    if (item.count > 1)
      setCartData(prev =>
        prev.map(obj =>
          obj.id === item.id ? { ...obj, count: obj.count - 1 } : obj
        )
      );
  };

  const handleInputChange = (item, inputValue) => {
    if (!inputValue || inputValue === 0) {
      setCartData(prev =>
        prev.map(obj =>
          obj.id === item.id ? { ...obj, count: obj.count } : obj
        )
      );
    } else {
      setCartData(prev =>
        prev.map(obj =>
          obj.id === item.id ? { ...obj, count: inputValue } : obj
        )
      );
    }
  };

  return (
    <ModalWindow {...props}>
      <ItemsField>
        {cartData.map(item => (
          <ModalCartItem>
            <div>
              <img src={item.src} alt={item.label} />
              <Title>
                <span>{item.label}</span>
                <p>{item.producer}</p>
              </Title>
            </div>
            <QuantityControl>
              <div>
                <button onClick={() => decreaseCartCount(item)} type="button">
                  <Icons name="Minus" width="16" height="16" color="#333333" />
                </button>
                <input
                  type="text"
                  value={item.count}
                  onChange={event =>
                    handleInputChange(item, Number(event.target.value))
                  }
                />
                <button onClick={() => increaseCartCount(item)} type="button">
                  <Icons name="Pluse" width="16" height="16" color="#333333" />
                </button>
              </div>
              {item.count > 1 && (
                <>
                  <span>x {item.price} ₽</span>
                </>
              )}
            </QuantityControl>
            <p>{item.price * item.count} ₽</p>
            <div>
              <button onClick={() => unCart(item)} type="button">
                <Icons name="Unliked" width="20" height="20" color="#9B111E" />
              </button>
            </div>
          </ModalCartItem>
        ))}
      </ItemsField>
      <OrderField>
        <p>
          ИТОГО:
          {cartData.reduce(
            (sum, current) => sum + current.price * current.count,
            0
          )}
          ₽
        </p>
        <div>
          <div>
            <input type="text" placeholder="Введите промокод" />
            <Button dark>заказать</Button>
          </div>
        </div>
      </OrderField>
    </ModalWindow>
  );
}
