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
        // if (reactSwipeRef.Pos) {
        setTimeout(() => {
          setTalkHour(reactSwipeRef.getPos());
        }, 300);
        // }
      },
      transitionEnd() {
        console.log('ended transition');
      },
    };

    return (
      <CarouselContainer>
        <HeaderContainer>
          <h3>{`${currentHour}:00`}</h3>
        </HeaderContainer>

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
  color: #2e2f30;
  width: 100%;
`;

const DrawerWrapper = styled.div`
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
    width: 500px;
    height: 87vh;
    overflow-y: scroll !important;
    background: #b0d58a;
    @media only screen and (max-device-height: 568px) {
      height: 74vh;
    }

    // desktop queries
    @media only screen and (max-height: 1240px) {
      height: 84vh;
    }

    @media only screen and (max-height: 960px) {
      height: 80vh;
    }

    @media only screen and (max-height: 1000px) {
      height: 78vh;
    }

    @media only screen and (max-height: 800px) {
      height: 75vh;
    }

    @media only screen and (max-height: 725px) {
      height: 73vh;
    }

    @media only screen and (max-height: 650px) {
      height: 70vh;
    }

    @media only screen and (max-height: 590px) {
      height: 67vh;
    }

    @media only screen and (max-height: 530px) {
      height: 65vh;
    }

    // mobile queries
    @media only screen and (max-device-height: 1366px) {
      height: 86vh;
    }

    @media only screen and (max-device-height: 1024px) {
      height: 82vh;
    }

    @media only screen and (max-device-height: 840px) {
      height: 82vh;
    }

    @media only screen and (max-device-height: 768px) {
      height: 76vh;
    }

    @media only screen and (max-device-height: 740px) {
      height: 80vh;
    }

    @media only screen and (max-device-height: 667px) {
      height: 78vh;
    }

    @media only screen and (max-device-height: 640px) {
      height: 76vh;
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

  .accordion--container {
    width: 300px;
    padding: 0 30px;
  }

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
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  box-shadow: 0 2px 20px -2px rgba(0, 0, 0, 0.2);
  z-index: 20;
`;

const DrawerNav = styled.div`
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
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

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
    '@media (max-height: 570px)': {
      padding: '0 20px',
    },
  },
  label: {
    //
  },
})(Button);
