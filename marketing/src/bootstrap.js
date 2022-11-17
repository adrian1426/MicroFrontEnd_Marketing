import React from 'react';
import ReactDOM from 'react-dom';

const mount = (htmlElement) => {
  ReactDOM.render(<h1>Marketing</h1>, htmlElement);
};


if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#_marketing-dev-root');

  root && mount(root);
}

export { mount };