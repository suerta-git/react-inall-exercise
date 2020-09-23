import React from 'react';
import Operator from './buttons/Operator';
import NumberButton from './buttons/NumberButton';

export default class Buttons extends React.Component {
  render() {
    return (
      <ul id="buttons">
        {['+', '-', '×'].map(operator => <Operator operator={operator} />)}
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(number => <NumberButton number={number} />)}
        <button type="button">Clear</button>
        <button type="button">=</button>
      </ul>
    );
  }
};
