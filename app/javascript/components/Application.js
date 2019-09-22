import React from 'react';
import Home from './Home/Home';
import styled from 'styled-components';
import 'normalize-css';

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://barcamp-tampa.herokuapp.com/graphql',
});

const Application = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <Home />
      </AppContainer>
    </ApolloProvider>
  );
};

export default Application;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
