import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchMenu } from './actions';

const App = ({route}) => {
  return <div>
    <Header/>
    <div className="container-fluid">
      { renderRoutes(route.routes) }
    </div>
  </div>;
};

export default {
  component: App,
  loadData: ({dispatch}) => dispatch(fetchMenu())
};