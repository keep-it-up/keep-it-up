import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Goal from './Components/Goal';
import Home from './Components/Home';

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
        <h3>Hello, User!</h3>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/goals/:_id" component={Goal} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuthenticator(App);
