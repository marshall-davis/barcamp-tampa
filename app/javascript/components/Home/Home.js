import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

import Drawer from '../Drawer/Drawer';

// this is where map will be
const Home = () => {
  const [drawerState, setDrawerState] = React.useState(false);

  return (
    <HomeContainer>
      <Drawer drawerState={drawerState} setDrawerState={setDrawerState} />

      <PlaceHolder>map goes here</PlaceHolder>

      <ButtonContainer>
        <DrawerButton
          onClick={() => setDrawerState(!drawerState)}
          color="primary"
          aria-label="add"
        >
          Open
        </DrawerButton>
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

const PlaceHolder = styled.span`
  text-align: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const DrawerButton = styled(Fab)`
  font-size: 16px;
  color: red;
`;
