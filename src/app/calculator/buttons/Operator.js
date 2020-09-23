import React from 'react';

const Operator = props =>
  <button
    className="operator-color button-shape"
    type="button"
    onClick={() => {props.handleInput(props.operator);}}
  >{props.operator}</button>;

export default Operator;
