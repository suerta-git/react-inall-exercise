import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

export default class Calculator extends React.Component {
  state = {
    value: []
  }

  render() {
    return (
      <section id="calculator">
        <h1>在线计算器</h1>
        <form>
          <p id="screen">{this.state.value.join(' ')}</p>
          <Buttons />
        </form>
        <Link to="/">回到主页</Link>
      </section>
    );
  }
};
