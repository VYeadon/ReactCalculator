import React, { Component } from 'react';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>This is a calculator, albiet a very basic one</h1>
          <Calculator />
        </center>
      </div>
    );
  }
}

