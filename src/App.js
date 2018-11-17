import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goal from './Components/Goal'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Goal />
      </div>
    );
  }
}

export default App;
