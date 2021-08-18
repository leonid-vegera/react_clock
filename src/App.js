/* eslint-disable */
import React from 'react';

import './App.scss';
import { Clock } from './Clock';
class App extends React.Component {
  state = {
    isClockVisible: false,
    date: new Date(),
    clockName: 0,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      if (this.state.isClockVisible) {  //todo если клоквизибл тру, то выводим в консоль каждую секунду новое время и имя часов
        console.log(this.state.date.toLocaleTimeString());
        console.log(this.state.clockName);
      }
    }, 1000); //todo каждую секунду - перезапись
  }
  
  render() {
    const showHandler = () => (
      this.setState({ isClockVisible: true })
    );
    const hideHandler = () => (
      this.setState({ isClockVisible: false })
    );
    const randomNameHandler = () => {
      let newName = +(Math.random() * 1000).toFixed(0);
      this.setState({ clockName: newName });
      console.log(`The Clock was renamed to ${newName}`);
    }

    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          isClockVisible={this.state.isClockVisible}
          name={this.state.clockName}
          time={this.state.date.toLocaleTimeString()}
        />

        <button
          type="button"
          onClick={showHandler}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={hideHandler}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={randomNameHandler}
        >
          Set random name
        </button>
      </div>
    )
  }
};

export default App;
