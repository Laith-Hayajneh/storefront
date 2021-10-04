import React from 'react';
import Header from './component/header'
import Categories from './component/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/products';
// import faker from 'faker';
import './app.css'
export default props => {
  return (
    <>
      <Header/>
      <Categories/>
      <Product/>
      {/* <Footer/> */}

    </>
  )}