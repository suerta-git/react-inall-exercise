import React from 'react';
import { Link } from 'react-router-dom';
import './Timer.less';

export default class Timer extends React.Component {
  state = {
    seconds: '',
    display: 'Start',
    timing: false
  }

  componentWillUnmount = () => {
    this.setState({
      seconds: '',
      display: 'Start',
      timing: false
    });
  }

  render() {
    return (
      <section className="page" id="timer">
        <h1>在线倒计时器</h1>
        <div>
          <form>
            <label className="font-size-return" for="time">设置时间</label>
            <input type="text" id="time" value={this.state.seconds} onChange={this.handleInputChange} />
            <button type="button" onClick={this.handleStart} disabled={this.state.timing}>Start</button>
          </form>
          <p>{this.state.display}</p>
        </div>
        <Link className="font-size-return" to="/">回到主页</Link>
      </section>
    );
  }

  handleInputChange = event => {
    this.setState({
      seconds: event.target.value
    });
  }

  handleStart = () => {
    let seconds = Number(this.state.seconds);
    this.setState({
      seconds: ''
    });

    if (Number.isNaN(seconds) || seconds <= 0) {
      return;
    }

    this.setState({
      timing: true,
      display: `${seconds} Seconds`,
    });

    const id = setInterval(() => {
      this.setState({
        display: `${--seconds} Seconds`,
      });
      if (seconds === 0) {
        this.setState({
          timing: false,
          display: 'End'
        });
        clearInterval(id);
      }
    }, 1000);
  }
};
