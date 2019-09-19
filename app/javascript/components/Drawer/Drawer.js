import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FixedSizeList as List } from 'react-window';

const Drawer = ({ drawerState, setDrawerState }) => {

  const getWindowDHeight = () => {
    const { innerHeight: height } = window;
    // subtracting to make room for header
    return height - 100;
  };

  const useWindowHeight = () => {
    const [windowHeight, setWindowHeight] = React.useState(getWindowDHeight());

    React.useEffect(() => {
      function handleResize() {
        setWindowHeight(getWindowDHeight());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowHeight;
  };

  const Row = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      <ListItem onClick={() => console.log('clicked')}>
        Time Slot {index}
      </ListItem>
    </div>
  );

  return (
      <StyledDrawer anchor="right" open={drawerState} onClose={() => null}>
        <DrawerWrapper>
          <div className="header">
            <CloseIcon onClick={() => setDrawerState(false)} icon={faTimes} />
          </div>
          <List
            height={useWindowHeight()}
            itemCount={1000}
            itemSize={35}
            width={300}
          >
            {Row}
          </List>
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
