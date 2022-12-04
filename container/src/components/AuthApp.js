import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const AuthApp = (props) => {
  const { onSignIn } = props;
  const refAuth = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(refAuth.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const nextPathName = location.pathname;
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={refAuth}></div>
  );
};

export default AuthApp;