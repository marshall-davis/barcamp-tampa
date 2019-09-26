import React from 'react';

const getWindowDHeight = ({ heightOffset }) => {
  const { innerHeight: height } = window;
  return height - heightOffset;
};

export const useWindowHeight = ({ heightOffset }) => {
  const [windowHeight, setWindowHeight] = React.useState(
    getWindowDHeight({ heightOffset })
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowHeight(getWindowDHeight({ heightOffset }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [heightOffset]);

  return windowHeight;
};

const getWindowWidth = ({ widthOffset }) => {
  const { innerWidth: width } = window;
  return width - widthOffset;
};

/* eslint-disable-next-line */
export const useWindowsWidth = ({ widthOffset }) => {
  const [windowWidth, setWindowWidth] = React.useState(
    getWindowWidth({ widthOffset })
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowDHeight({ widthOffset }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [widthOffset]);

  return windowWidth;
};
