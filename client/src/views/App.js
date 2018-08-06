import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo';

import '../styles/App.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// apollo client setup
const BASE_URL = 'http://localhost:4000/graphql';
const httpLink = new HttpLink({
  uri: BASE_URL,
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache,
});

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <div className="wrapper container">
            <Sidebar />

          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
