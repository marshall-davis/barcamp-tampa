import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FixedSizeList as List } from 'react-window';
import ReactSwipe from 'react-swipe';
import { useWindowHeight } from '../../utils/windowMeasurement';
import { TALKS } from './quries';
import { useQuery } from '@apollo/react-hooks';
import Accordion from './Accordion';

const Drawer = ({ drawerState, setDrawerState }) => {
  const Carousel = () => {
    const { loading, error, data } = useQuery(TALKS);
    if (error) console.error('error', error);
    const [talks, setTalks] = useState([]);

    useEffect(() => {
      if (!loading && data) {
        setTalks(data.talks);
      }
    }, [loading, data]);

    console.log('talks', talks);
    console.log('length', talks.length);
    let reactSwipeEl;

    const Row = ({ index, style, data }) => {
      const talk = data[index];
      return (
        <div className="accordion--container" style={style}>
          <Accordion
            description={talk.description}
            name={`${talk.speaker.firstName} ${talk.speaker.lastName}`}
            title={talk.title}
          />
        </div>
      );
    };

    const numberOfSlides = talks.length;
    const height = useWindowHeight({ heightOffset: 100 });

    const talkSlides = Array.apply(null, Array(numberOfSlides)).map(
      (_, index) => {
        return (
          <div className="list-container" key={index}>
            <List
              height={height}
              itemData={talks}
              itemCount={talks.length}
              itemSize={200}
              style={{ overflowX: 'hidden' }}
            >
              {Row}
            </List>
          </div>
        );
      }
    );

    const startSlide = 0;
    const swipeOptions = {
      startSlide:
        startSlide < talkSlides.length && startSlide >= 0 ? startSlide : 0,
      speed: 500,
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
          {talkSlides}
        </ReactSwipe>
        <div>
          <button onClick={() => reactSwipeEl.prev()}>Previous</button>
          <button onClick={() => reactSwipeEl.next()}>Next</button>
        </div>
        <span>{`Slide 1 of ${numberOfSlides}`}</span>
      </CarouselContainer>
    );
  };

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

Drawer.propTypes = {
  index: PropTypes.string,
  style: PropTypes.object,
  drawerState: PropTypes.bool,
  setDrawerState: PropTypes.func,
  data: PropTypes.func,
};

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
  font-size: 16px;

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
    width: 500px;
    height: 100%;

    @media only screen and (max-device-width: 520px) {
      width: 460px;
    }

    @media only screen and (max-device-width: 500px) {
      width: 420px;
    }

    @media only screen and (max-device-width: 450px) {
      width: 400px;
    }

    @media only screen and (max-device-width: 400px) {
      width: 350px;
    }

    @media only screen and (max-device-width: 350px) {
      width: 300px;
    }
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

  .accordion--container {
    width: 300px;
    padding: 0 30px;
  }

  .list-container {
    overflow-x: hidden;
    width: 90%;

    @media only screen and (max-device-width: 550px) and (-webkit-device-pixel-ratio: 2) {
      width: 80%;
    }
  }
`;
