import React from 'react';

const NumberButton = props =>
  <button
    className="number-color button-shape"
    type="button"
    onClick={() => {props.handleInput(props.number);}}
  >{props.number}</button>;

export default NumberButton;
