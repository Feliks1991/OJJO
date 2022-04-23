import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Wrapper from '../components/Wrapper';
import GoodsContext from '../context/GoodsContext';

const ProductsContainer = styled(Wrapper)`
  padding: 100px 0 150px 0;
`;

const ProductCardContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 350px);
  row-gap: 20px;
`;

export default function Products() {
  const Goods = [
    {
      id: '1',
      src: 'images/rings/rings_armani_1.jpg',
      label: 'Кольцо',
      producer: 'Emporio Armani / EGS1602040',
      price: '11000',
    },
    {
      id: '2',
      src: 'images/rings/rings_pandora_1.jpg',
      label: 'Кольцо',
      producer: 'PANDORA Moments / 199048C00-48',
      price: '12000',
    },
    {
      id: '3',
      src: 'images/earrings/earrings_pandora_1.jpg',
      label: 'Серьги',
      producer: 'PANDORA Moments / 299052C01',
      price: '13000',
    },
    {
      id: '4',
      src: 'images/earrings/earrings_precieux_1.jpg',
      label: 'Серьги',
      producer: " L'ATELIER PRECIEUX / 1556410",
      price: '14000',
    },
    {
      id: '5',
      src: 'images/cufflinks/cufflinks_nomination_1.jpg',
      label: 'Запонки',
      producer: 'PANDORA Moments / 299052C01',
      price: '15000',
    },
    {
      id: '6',
      src: 'images/cufflinks/cufflinks_tommyHilfiger_1.jpg',
      label: 'Запонки',
      producer: 'NOMINATION / 132909-001',
      price: '16000',
    },
    {
      id: '7',
      src: 'images/bracelets/bracelets_brosway_1.jpg',
      label: 'Браслет',
      producer: 'BROSWAY / BNF13A',
      price: '17000',
    },
    {
      id: '8',
      src: 'images/bracelets/bracelets_nomination_1.jpg',
      label: 'Браслет',
      producer: 'NOMINATION / 021133-006',
      price: '18000',
    },
    {
      id: '9',
      src: 'images/watchs/watchs_candino_1.jpg',
      label: 'Часы',
      producer: 'CANDINO / C4721-1',
      price: '19000',
    },
    {
      id: '10',
      src: 'images/watchs/watchs_pierreCardin_1.jpg',
      label: 'Часы',
      producer: 'Pierre Cardin / CBV.1035',
      price: '20000',
    },
    {
      id: '11',
      src: 'images/suspensions/suspensions_georgette_1.jpg',
      label: 'Подвеска',
      producer: 'Les Georgettes / 70333021600000',
      price: '21000',
    },
    {
      id: '12',
      src: 'images/suspensions/suspensions_pandora_1.jpg',
      label: 'Подвеска',
      producer: 'PANDORA Moments / 367075EN16',
      price: '22000',
    },
  ];

  const { cartData, setCartData, likedData, setLikedData } =
    React.useContext(GoodsContext);
    
    React.useEffect(() => {
      setLikedData(JSON.parse(window.localStorage.getItem('likedData')) || []);
      setCartData(JSON.parse(window.localStorage.getItem('cartData')) || []);
    }, []);

  React.useEffect(() => {
    window.localStorage.setItem('likedData', JSON.stringify(likedData));
  }, [likedData]);

  React.useEffect(() => {
    window.localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  const dataUpdate = (item, data, setData, dataDirection) => {
    if (data.find(obj => obj.id === item.id)) {
      setData(prev => prev.filter(obj => obj.id !== item.id));
    } else if (dataDirection === 'cartData') {
      setData(prev => [...prev, Object.assign(item, { count: 1 })]);
    } else if (dataDirection === 'likedData') {
      setData(prev => [...prev, item]);
    }
  };

  return (
    <>
      <ProductsContainer>
        <ProductCardContainer>
          {Goods.map(item => (
            <ProductCard
              src={item.src}
              label={item.label}
              producer={item.producer}
              price={item.price}
              toCart={() =>
                dataUpdate(item, cartData, setCartData, 'cartData')
              }
              toLiked={() =>
                dataUpdate(item, likedData, setLikedData, 'likedData')
              }
              cartDataControl={cartData.find(obj => obj.id === item.id)}
              likedDataControl={likedData.find(obj => obj.id === item.id)}
            />
          ))}
        </ProductCardContainer>
      </ProductsContainer>
    </>
  );
}
