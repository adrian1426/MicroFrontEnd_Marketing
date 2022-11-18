import React from 'react';
import { mount } from 'marketing/MarketingApp';

const App = () => {
  console.log('mount: ', mount);
  return (
    <div>
      <h1>App component</h1>
    </div>
  );
};

export default App;