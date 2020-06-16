import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>This is the homepage</div>
      <button onClick={ () => console.log('Button clicked') }>Click</button>
    </div>
  );
};

export default {
  component: HomePage
};