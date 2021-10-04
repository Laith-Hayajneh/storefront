import React from 'react';
import Header from './component/header'
import Categories from './component/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/products';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import './app.css'
import SimpleCart from './component/SimpleCart ';
export default props => {
  return (
    <>
      <Header />
      <Categories />
      <Product />
      {/* <Router>
        <Switch>
          <Route exact path='/' component={Product} />

          <Route exact path="/cart" component={SimpleCart} />
        </Switch>

      </Router> */}
      {/* <Footer/> */}

    </>
  )
}