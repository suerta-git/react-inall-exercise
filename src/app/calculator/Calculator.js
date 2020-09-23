import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import './Calculator.less';

export default class Calculator extends React.Component {
  state = {
    values: [],
    error: false
  }

  componentWillUnmount = () => {
    this.handleClear();
  }

  render() {
    return (
      <section id="calculator" className="page" >
        <h1>在线计算器</h1>
        <form>
          <p id="screen">{this.state.values.join(' ')}</p>
          <Buttons
            handleInput={this.handleInput}
            handleClear={this.handleClear}
            handleCalculate={this.handleCalculate}
          />
        </form>
        <Link className="font-size-return" to="/">回到主页</Link>
      </section>
    );
  }

  handleInput = (value) => {
    if (this.state.values.length < 3) {
      this.setState({
        values: this.state.values.concat(value)
      });
    }
  }

  handleClear = () => {
    this.setState({
      values: []
    });
  }

  handleCalculate = () => {
    if (this.state.values.length < 3) {
      this.handleClear();
      return;
    }
    const firstValue = this.state.values[0];
    const secondValue = this.state.values[2];
    const operator = this.state.values[1];
    if (typeof operator !== 'string' ||
      typeof firstValue !== 'number' ||
      typeof secondValue !== 'number') {
        this.handleClear();
        return;
    }

    let result;
    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '×':
        result = firstValue * secondValue;
    }
    this.setState({ values: [result] });
  }

  beError() {
    this.setState({
      values: ['Error!']
    });
  }
};
