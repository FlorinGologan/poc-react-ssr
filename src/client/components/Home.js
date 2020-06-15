import React from 'react';

const Home = () => {
  return (
    <div>
      <div>This is the homepage</div>
      <button onClick={ () => console.log('Button clicked') }>Click</button>
    </div>
  );
};

export default Home;