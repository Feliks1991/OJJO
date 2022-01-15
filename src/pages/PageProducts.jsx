import React from 'react'
import Header from '../sections/Header'
import Products from '../sections/Products'
import Mailing from '../sections/Mailing';
import Footer from '../sections/Footer';


export default function PageProducts(){
  return(
    <>
      <Header mainHeader/>
      <Products/>
      <Mailing/>
      <Footer/>
    </>


  )
}