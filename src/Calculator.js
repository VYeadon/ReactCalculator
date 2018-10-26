import React, { Component } from 'react';

export default class Calculator extends Component {

  static defaults = 
  {
    screenValue : "0",
    firstValue : " ",
    secondValue : " ",
    operator : " "
  }

  constructor(){
    super();
    
  this.calculation = (event) => {

    if(isNaN(event.target.value)) {
      if(event.target.value === "=") {
        
      }
      else {
        this.operator();
      }
    }
    else {
      this.numbers(event);
    }
  }

  this.operator = (event) => this.setState ({
    screenValue : this.state.screenValue + event.target.value,
    firstValue : this.screenValue,
    operator : event.target.value
  })

  // adds numbers to the dispaly
  this.numbers = (event) => this.setState ({
    screenValue : this.state.screenValue + event.target.value,
    operator : event.target.value
  })
}

  render() {
    return (
    <div >
      <div class="row">
        <div class="col-sm-4">
          <input type="text"  readOnly></input>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
        <div class="col-sm-1">
          <button value="9">9</button>
        </div>

        <div class="col-sm-1">
          <button value="8">8</button>
        </div>

        <div class="col-sm-1">
          <button value="7">7</button>
        </div>

        <div class="col-sm-1">
          <button value="+">+</button>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
        <div class="col-sm-1">
          <button value="6">6</button>
        </div>

        <div class="col-sm-1">
          <button value="5">5</button>
        </div>

        <div class="col-sm-1">
          <button value="4">4</button>
        </div>

        <div class="col-sm-1">
          <button value="-">-</button>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
        <div class="col-sm-1">
          <button value="3">3</button>
        </div>

        <div class="col-sm-1">
          <button value="2">2</button>
        </div>

        <div class="col-sm-1">
          <button value="1">1</button>
        </div>

        <div class="col-sm-1">
          <button value="*">*</button>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
          <div class="col-sm-3">
            <button value="0">0</button>
          </div>
          
          <div class="col-sm-1">
            <button value="/">/</button>
          </div>
      </div>
    </div>
    );
  }
}
