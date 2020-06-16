import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';

export default () => {
  return (
    <div>
      <Route exact path="/" component={ Home }/>
      <Route path="/products" component={ ProductsList }/>
      <Route path="/test" component={ () => 'Test Route' }/>
    </div>
  );
}