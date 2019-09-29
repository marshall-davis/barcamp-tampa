import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ReactSwipe from 'react-swipe';
import Accordion from './Accordion';

const Drawer = ({
  drawerState,
  setDrawerState,
  talkData,
  setTalkHour,
  talkTimeSlotIndex,
  numberOfHours,
}) => {
  const Carousel = () => {
    const [reactSwipeRef, setReactSwipeEl] = useState(null);
    // const height = useWindowHeight({ heightOffset: 100 });

    const talkSlides = Array.apply(null, Array(numberOfHours)).map(
      (_, index) => {
        return (
          <div className="list-container" key={index}>
            {talkData.map(talk => {
              console.log('talk', talk);
              return (
                <ListItem key={index}>
                  <Accordion
                    id={talk.id}
                    description={talk.description}
                    name={`${talk.speaker.firstName} ${talk.speaker.lastName}`}
                    title={talk.title}
                  />
                </ListItem>
              );
            })}
          </div>
        );
      }
    );
    const slideStart =
      talkTimeSlotIndex < numberOfHours && talkTimeSlotIndex >= 0
        ? talkTimeSlotIndex
        : 0;
    const swipeOptions = {
      startSlide: slideStart,
      speed: 500,
      disableScroll: false,
      continuous: true,
      callback() {
        console.log('slide changed');
      },
      transitionEnd() {
        console.log('ended transition');
        setTalkHour(reactSwipeRef.getPos());
      },
    };

    return (
      <CarouselContainer>
        <ReactSwipe
          className="carousel"
          swipeOptions={swipeOptions}
          ref={ref => setReactSwipeEl(ref)}
        >
          {talkSlides}
        </ReactSwipe>

        <DrawerNav>
          <Button
            onClick={() => reactSwipeRef.swipe.prev()}
            variant="contained"
            color="primary"
          >
            Prev
          </Button>
          <Button
            onClick={() => setDrawerState(false)}
            variant="contained"
            color="secondary"
          >
            Close
          </Button>
          <Button
            onClick={() => reactSwipeRef.swipe.next()}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </DrawerNav>
        <span>{`Slide ${talkTimeSlotIndex + 1} of ${numberOfHours}`}</span>
      </CarouselContainer>
    );
  };

  return (
    <StyledDrawer anchor="right" open={drawerState} onClose={() => null}>
      <DrawerWrapper>
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
  overflow: hidden;

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

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .accordion--container {
    width: 300px;
    padding: 0 30px;
  }

  > span {
    margin-top: 20px;
  }

  .list-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;

    @media only screen and (max-device-width: 550px) and (-webkit-device-pixel-ratio: 2) {
      width: 80%;
    }
  }
`;

const DrawerNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 20;
  padding: 0 15px;
  height: 50px;
`;

const ListItem = styled.div`
  margin-top: 50px;
  width: 100%;
  margin-left: 40px;
  
  &:last-child {
    margin-bottom: 50px;
  }
`;
