import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to='/'>Home</Link> |
      <Link to='/products'>Products</Link> |
      <Link to='/test'>Test</Link>
    </div>
  );
}