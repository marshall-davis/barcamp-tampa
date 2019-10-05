import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ReactSwipe from 'react-swipe';
import Accordion from './components/Accordion';
import withStyles from '@material-ui/core/styles/withStyles';
const uuid = require('uuid/v1');

const Drawer = ({
  drawerState,
  setDrawerState,
  talkData,
  setTalkHour,
  talkTimeSlotIndex,
  numberOfHours,
  currentHour,
}) => {
  const Carousel = () => {
    const [reactSwipeRef, setReactSwipeEl] = useState(null);
    // const height = useWindowHeight({ heightOffset: 100 });

    const talkPages = Array.apply(null, Array(numberOfHours)).map(() => {
      return (
        <div key={uuid()}>
          {talkData.map(talk => {
            return (
              <ListItem key={uuid()}>
                <Accordion
                  key={uuid()}
                  talkData={talk}
                  currentHour={currentHour}
                />
              </ListItem>
            );
          })}
        </div>
      );
    });
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
        setTimeout(() => {
          setTalkHour(reactSwipeRef.getPos());
        }, 200);
      },
    };

    return (
      <CarouselContainer>
        <ReactSwipe
          className="carousel"
          swipeOptions={swipeOptions}
          ref={ref => setReactSwipeEl(ref)}
        >
          {talkPages}
        </ReactSwipe>

        <DrawerNav>
          <PrimaryButtons
            onClick={() => reactSwipeRef.swipe.prev()}
            variant="contained"
            color="primary"
          >
            Prev
          </PrimaryButtons>
          <CloseButton
            onClick={() => setDrawerState(false)}
            variant="contained"
            color="secondary"
          >
            Close
          </CloseButton>
          <PrimaryButtons
            onClick={() => reactSwipeRef.swipe.next()}
            variant="contained"
            color="primary"
          >
            Next
          </PrimaryButtons>
        </DrawerNav>
        <span>{`Page ${talkTimeSlotIndex + 1} of ${numberOfHours}`}</span>
      </CarouselContainer>
    );
  };

  return (
    <StyledDrawer anchor="right" open={drawerState} onClose={() => null}>
      <DrawerWrapper>
        <HeaderContainer>
          <h3>{`${currentHour}:00`}</h3>
        </HeaderContainer>
        <Carousel currentHout={currentHour} />
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
  setTalkHour: PropTypes.func,
  talkTimeSlotIndex: PropTypes.number,
  numberOfHours: PropTypes.number,
  currentHour: PropTypes.string,
  talkData: PropTypes.array,
};

const StyledDrawer = styled(SwipeableDrawer)`
  font-family: 'Open Sans', Helvetica, Arial, Verdana, sans-serif;
  color: #2e2f30;
  width: 100%;
`;

const DrawerWrapper = styled.div`
  font-family: 'Open Sans', Helvetica, Arial, Verdana, sans-serif;
  color: #2e2f30;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  overflow: hidden;

  .carousel {
    font-family: 'Open Sans', Helvetica, Arial, Verdana, sans-serif;
    width: 500px;
    height: 90vh;
    overflow-y: scroll !important;
    background: #b0d58a;

    // mobile queries
    @media only screen and (max-device-height: 1366px) {
      height: 90vh;
    }

    @media only screen and (max-device-height: 568px) {
      height: 90vh;
    }

    @media only screen and (max-device-width: 550px) {
      width: 80%;
    }

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
  font-family: inherit;

  > span {
    padding-top: 30px;
    padding-bottom: 15px;
    background: #f7f7f7;
    font-weight: bold;

    @media only screen and (max-device-width: 420px) {
      padding-top: 10px;
      padding-bottom: 5px;
    }
  }
`;

const HeaderContainer = styled.div`
  font-family: inherit;
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.2);
  z-index: 20;
  width: 500px;
  position: fixed;
  top: 0;
  right: 0;

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
`;

const DrawerNav = styled.div`
  font-family: inherit;
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 20;
  padding: 30px 30px 0 30px;
  height: 40px;
  -webkit-box-shadow: 0 0 9px 3px rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 0 0 9px 3px rgba(41, 41, 41, 0.25);
  box-shadow: 0 -13px 16px -10px rgba(41, 41, 41, 0.25);

  @media only screen and (max-device-width: 420px) {
    padding: 15px 10px 10px 10px;
  }
`;

const ListItem = styled.div`
  font-family: 'Open Sans', Helvetica, Arial, Verdana, sans-serif;
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  &:first-child {
    margin-top: 110px;
  }

  @media only screen and (max-device-height: 1000px) {
    &:first-child {
      margin-top: 120px;
    }
  }

  &:last-child {
    margin-bottom: 50px;
  }
`;

const PrimaryButtons = withStyles({
  root: {
    background: 'rgb(38, 177, 97)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(41,41,41,.25)',
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
    '@media (max-height: 570px)': {
      padding: '0 20px',
    },
  },
  label: {
    //
  },
})(Button);

const CloseButton = withStyles({
  root: {
    background: 'rgb(31, 150, 242)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(41,41,41,.25)',
    fontFamily:
      'font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;',
    '@media (max-height: 570px)': {
      padding: '0 20px',
    },
  },
  label: {
    //
  },
})(Button);
