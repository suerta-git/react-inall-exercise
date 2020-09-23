import React from 'react';
import Operator from './buttons/Operator';
import NumberButton from './buttons/NumberButton';

export default class Buttons extends React.Component {
  render() {
    return (
      <ul id="buttons">
        {['+', '-', '×'].map(operator => <Operator operator={operator} handleInput={this.props.handleInput} key={operator} />)}
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(number => <NumberButton number={number} handleInput={this.props.handleInput} key={number} />)}
        <button
          className="clear-color button-shape"
          type="button"
          onClick={this.props.handleClear}
        >Clear</button>
        <button
          className="equal-color button-shape"
          type="button"
          onClick={this.props.handleCalculate}
        >=</button>
      </ul>
    );
  }
};
