import React from 'react';

const getWindowDHeight = ({ heightOffset }) => {
  const { innerHeight: height } = window;
  // subtracting to make room for header
  return height - heightOffset;
};

export const useWindowHeight = ({ heightOffset }) => {
  const [windowHeight, setWindowHeight] = React.useState(
    getWindowDHeight({ heightOffset })
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowHeight(getWindowDHeight({ heightOffset }));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowHeight;
};
