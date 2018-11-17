import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            Auth.signOut();
            window.location.reload();
          }}
        >
          Signout
        </button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
