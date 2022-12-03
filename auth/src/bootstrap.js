import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (htmlElement, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, htmlElement);

  return {
    onParentNavigate(location) {
      const nextPathName = location.pathname;
      const { pathname } = history.location;

      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  }
};


if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#_auth-dev-root');

  root && mount(root, { defaultHistory: createBrowserHistory() });
}

export { mount };