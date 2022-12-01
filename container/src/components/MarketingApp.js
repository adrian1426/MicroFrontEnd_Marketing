import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const refMarketing = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(refMarketing.current, {
      onNavigate: (location) => {
        const nextPathName = location.pathname;
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={refMarketing}></div>
  );
};

export default MarketingApp;