import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      }, {
        ...ProductsListPage,
        path: '/products',
      }, {
        path: '/test',
        component: () => <h1>Test route</h1>,
      }, {
        ...NotFoundPage
      }
    ]
  }
];


