import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (htmlElement, { onNavigate }) => {
  const history = createMemoryHistory();
  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, htmlElement);
};


if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#_marketing-dev-root');

  root && mount(root, { onNavigate: null });
}

export { mount };