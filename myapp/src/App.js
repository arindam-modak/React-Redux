import React, { Component } from 'react';
//import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <p>Welcome hehe</p>
        <Ninjas name="Ryu" age="25" /> 
      </div>
    );
  }
}

export default App;
