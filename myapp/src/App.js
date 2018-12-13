import React, { Component } from 'react';
//import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name:'Ryu', age: 30, id:1},
      {name:'Yoshi', age: 20, id:2},
      {name:'Crystal', age: 27, id:3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <p>Welcome hehe</p>
        <Ninjas name="Ryu" age="25" ninjas = {this.state.ninjas}/> 
        <AddNinja />
      </div>
    );
  }
}

export default App;
