import React from 'react';
import {Link} from 'react-router-dom';
import './Home.less';

const Home = () => {
  return (<div className="home">
    <section id="title">
      <h1>在线实用工具</h1>
    </section>
    <section id="links">
      <ul>
        <li id="calculator">
          <img className="image-size" src={require('../images/calculator.png')} alt="calculator" />
          <Link to="/calculator">计算器</Link>
        </li>
        <li id="timer">
          <img className="image-size" src={require('../images/timer.png')} alt="timer" />
          <Link to="/timer">倒计时器</Link>
        </li>
      </ul>
    </section>
  </div>);
};

export default Home;
