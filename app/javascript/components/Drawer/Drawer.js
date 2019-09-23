import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FixedSizeList as List } from 'react-window';
import ReactSwipe from 'react-swipe';
import { useWindowHeight } from '../../utils/windowMeasurement';

const Carousel = () => {
  let reactSwipeEl;

  const Row = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      <ListItem onClick={() => console.log('clicked')}>Talk {index}</ListItem>
    </div>
  );

  const numberOfSlides = 8;
  const hourSlides = [
    {
      hour: 1,
      hourTitle: '9:00 AM',
    },
    {
      hour: 2,
      hourTitle: '1:00 AM',
    },
  ];

  const talkNodes = Array.apply(null, Array(numberOfSlides)).map((_, index) => {
    return (
      <div key={index}>
        <List
          height={useWindowHeight({ heightOffset: 100 })}
          itemCount={1000}
          itemSize={35}
          width={300}
        >
          {Row}
        </List>
      </div>
    );
  });

  const startSlide = 0;
  const swipeOptions = {
    startSlide:
      startSlide < talkNodes.length && startSlide >= 0 ? startSlide : 0,
    speed: 1000,
    disableScroll: true,
    continuous: true,
    callback() {
      console.log('slide changed');
    },
    transitionEnd() {
      console.log('ended transition');
    },
  };

  return (
    <CarouselContainer>
      <ReactSwipe
        className="carousel"
        swipeOptions={swipeOptions}
        ref={el => (reactSwipeEl = el)}
      >
        {talkNodes}
      </ReactSwipe>
      <div>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
      </div>
      <span>{`Slide 1 of ${numberOfSlides}`}</span>
    </CarouselContainer>
  );
};

const Drawer = ({ drawerState, setDrawerState }) => {
  return (
    <StyledDrawer anchor="right" open={drawerState} onClose={() => null}>
      <DrawerWrapper>
        <div className="header">
          <CloseIcon onClick={() => setDrawerState(false)} icon={faTimes} />
        </div>
        <Carousel />
      </DrawerWrapper>
    </StyledDrawer>
  );
};

export default Drawer;

const StyledDrawer = styled(SwipeableDrawer)`
  color: #2e2f30;
  width: 100%;
`;

const DrawerWrapper = styled.div`
  color: #2e2f30;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;

  .header {
    position: fixed;
    top: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  .carousel {
    width: 300px;
    height: 100%;
  }
`;

const ListItem = styled.span`
  width: 400px;

  &:hover {
    cursor: pointer;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
