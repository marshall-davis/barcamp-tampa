import React from 'react';
import Home from './Home/Home';
import styled from 'styled-components';

import 'normalize-css';

class Application extends React.Component {
  render() {
    return (
      <AppContainer>
        <Home />
      </AppContainer>
    );
  }
}

export default Application;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
