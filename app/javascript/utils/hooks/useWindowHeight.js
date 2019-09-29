import { useState, useEffect } from 'react';
import { element } from 'prop-types';

const getWindowHeight = ({ heightOffset }) => {
  const { innerHeight: windowHeight } = window;
  return windowHeight - heightOffset;
};

export const useWindowHeight = ({ heightOffset }) => {
  const [windowHeight, setWindowHeight] = useState(
    getWindowHeight({ heightOffset })
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(getWindowHeight({ heightOffset }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [heightOffset]);

  return windowHeight;
};
