import React from 'react';
import Header from '../sections/Header';
import GoodsType from '../sections/GoodsType';
import Store from '../sections/Store';
import HelpfulColumns from '../sections/HelpfulColumns';
import Mailing from '../sections/Mailing';
import Footer from '../sections/Footer';
import OurSocial from '../sections/OurSocial';

export default function PageMain(){
  return(
    <>
      <Header/>
      <GoodsType/>
      <Store/>
      <HelpfulColumns/>
      <OurSocial/>
      <Mailing/>
      <Footer/>
    </>
    
  )
}