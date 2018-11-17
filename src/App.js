import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goal from './Components/Goal'

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
        <Goal />
      </div>
    );
  }
}

export default withAuthenticator(App);
