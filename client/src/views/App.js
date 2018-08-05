import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import '../styles/App.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
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
