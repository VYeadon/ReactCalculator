import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(){
    super();

    this.state = 
    {
      screenValue : "",
      firstValue : "",
      secondValue : "",
      operator : ""
    }
    
  this.calculation = (event) => {

    if(isNaN(event.target.value)) {
      if(event.target.value === "=") {
        this.calculate();
      }
      else if(event.target.value === "CE") {
        this.clear();
      }
      else {
        this.operator(event);
      }
    }
    else {
      this.numbers(event);
    }
  }

  this.clear = () => this.setState ({
    screenValue: ""
  })

  this.calculate = () => this.setState ({
    screenValue: eval(this.state.screenValue)
  })

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
    <div class="col-xs-offset-4">
      <div class="row">
        <div class="col-xs-4 col-centered">
          <input type="text"  value={this.state.screenValue} readOnly></input>
        </div>
      </div>

<div >
      <div class="row" onClick={this.calculation}>
        <div class="col-xs-1">
          <button value="9">9</button>
        </div>

        <div class="col-xs-1">
          <button value="8">8</button>
        </div>

        <div class="col-xs-1">
          <button value="7">7</button>
        </div>

        <div class="col-xs-1">
          <button value="+">+</button>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
        <div class="col-xs-1">
          <button value="6">6</button>
        </div>

        <div class="col-xs-1">
          <button value="5">5</button>
        </div>

        <div class="col-xs-1">
          <button value="4">4</button>
        </div>

        <div class="col-xs-1">
          <button value="-">-</button>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
        <div class="col-xs-1">
          <button value="3">3</button>
        </div>

        <div class="col-xs-1">
          <button value="2">2</button>
        </div>

        <div class="col-xs-1">
          <button value="1">1</button>
        </div>

        <div class="col-xs-1">
          <button value="*">*</button>
        </div>
      </div>

      <div class="row" onClick={this.calculation}>
          <div class="col-xs-1">
            <button value="CE">CE</button>
          </div>

          <div class="col-xs-1">
            <button value="0">0</button>
          </div>

           <div class="col-xs-1">
            <button value="=">=</button>
          </div>
          
          <div class="col-xs-1">
            <button value="/">/</button>
          </div>
      </div>
      </div>
    </div>
    );
  }
}
