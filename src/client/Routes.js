import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';

export default [
  {
    ...App,
    routes: [
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
    ]
  }
];


