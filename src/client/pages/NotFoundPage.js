import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
  staticContext.notFound = true;
  return <h1>404 Page</h1>;
};

export default {
  component: NotFoundPage
};