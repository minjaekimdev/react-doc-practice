import React, { Component } from 'react';
import './header.css';
import Comp2 from './comp/comp2';

class Comp1 extends Component {
  render() {
    return (
      <div className='comp1'>
        <Comp2></Comp2>
      </div>
    )
  }
}

export default Comp1;