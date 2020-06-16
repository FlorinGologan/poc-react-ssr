import React from 'react';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...ProductsListPage,
    path: '/products',
  },
  {
    path: '/test',
    component: () => 'Test route',
  }
];
