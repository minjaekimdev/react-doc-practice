import React, { Component } from 'react';
import './App.css';
import Comp1 from './comp1';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='first'>
          <div className='comp2'></div>
        </div>
        <Comp1></Comp1>
      </div>
    )
  }
}

export default App;