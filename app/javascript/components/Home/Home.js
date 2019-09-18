import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// this is where map will be
const Home = () => {
  const [drawerState, setDrawerState] = React.useState(true);
  return (
    <HomeContainer>
      <StyledDrawer anchor="right" open={drawerState} onClose={() => null}>
        <DrawerWrapper>
          <div className="header">
            <CloseIcon
              onClick={() => setDrawerState(false)}
              icon={faTimes}
            />
          </div>

          <ListItem>Time Block</ListItem>
          <ListItem>Time Block</ListItem>
          <ListItem>Time Block</ListItem>
          <ListItem>Time Block</ListItem>
          <ListItem>Time Block</ListItem>
        </DrawerWrapper>
      </StyledDrawer>
      <PlaceHolder>map goes here</PlaceHolder>

      <ButtonContainer>
        <Fab
          onClick={() => setDrawerState(!drawerState)}
          color="primary"
          aria-label="add"
        >
          Open
        </Fab>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: cornflowerblue;
`;

const StyledDrawer = styled(SwipeableDrawer)`
  color: #2e2f30;
  width: 100%;
`;

const DrawerWrapper = styled.div`
  color: #2e2f30;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;

  .header {
    position: fixed;
    top: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
`;

const PlaceHolder = styled.span`
  text-align: center;
`;

const ListItem = styled.span`
  width: 400px;
`;

const CloseIcon = styled(FontAwesomeIcon)`
width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;
