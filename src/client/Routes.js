import React from 'react';
import Home from './components/Home';
import ProductsList from './components/ProductsList';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/products',
    component: ProductsList,
  },
  {
    path: '/test',
    component: () => 'Test route',
  }
];
