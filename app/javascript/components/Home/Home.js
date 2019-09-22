import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Drawer from '../Drawer/Drawer';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const TALKS = gql`
  {
    talks {
      id
      title
      description
      speaker: user {
        email
        firstName
        lastName
      }
      room {
        name
        location {
          name
        }
      }
    }
  }
`;

// this is where map will be
const Home = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  const { loading, error, data } = useQuery(TALKS);
  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);

  return (
    <HomeContainer>
      <Drawer drawerState={drawerState} setDrawerState={setDrawerState} />

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

const PlaceHolder = styled.span`
  text-align: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;
