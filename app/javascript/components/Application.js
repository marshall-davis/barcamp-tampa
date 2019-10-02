import React from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import * as serviceWorker from '../serviceWorker';
import 'normalize-css';

import Home from './Home/Home';

const client = new ApolloClient({
  link: createHttpLink({ uri: '/graphql', credentials: 'same-origin' }),
  cache: new InMemoryCache(),
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

export default Application;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
