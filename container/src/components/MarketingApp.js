import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const refMarketing = useRef(null);

  useEffect(() => {
    mount(refMarketing.current);
  }, []);

  return (
    <div ref={refMarketing}></div>
  );
};

export default MarketingApp;