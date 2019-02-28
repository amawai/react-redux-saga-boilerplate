import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterButton from './components/CounterButton';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CounterButton/>
      </div>
    );
  }
}

export default App;
