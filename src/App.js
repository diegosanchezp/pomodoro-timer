import React from 'react';
import Timer from './Timer';

import './App.css';

const SESSION = 0; 
const BREAK = 1;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timers: [
        {hours: 0, minutes: 25, seconds: 0, name: "Work"}, //Session
        {hours: 0, minutes: 5, seconds: 0, name: "Break"} // BREAK 
      ]
    }
  }

  incDecTimer(type, time){
    this.setState(({timers})=>{
      // Using JSON object to make a new deep copy of the props
      const newTimers = JSON.parse(JSON.stringify(timers));
      newTimers[type].minutes = newTimers[type].minutes + time; 
      if(newTimers[type].minutes >= 0){
        return { timers: newTimers }
      }else{
        return 
      }
    });
  }

  render(){
    return (
      <div className="App">
        <Timer timers={this.state.timers}/>
        <p id="session-label">
          Work length:
          <span id="session-length"> 
          {' '}{this.state.timers[SESSION].minutes} 
          {this.state.timers[SESSION].minutes === 1 ? " minute": " minutes"} 
          </span>
        </p>
        <div className="control">
          <button id="session-increment" title="Session increment" 
            onClick={this.incDecTimer.bind(this, SESSION, 1)}>
              <i className="fa fa-plus"></i>
            </button>
          <button id="session-decrement" title="Session decrement" 
            onClick={this.incDecTimer.bind(this, SESSION, -1)}>
              <i className="fa fa-minus"></i>
            </button>
        </div>
        <p id="break-label">
          Break length:  
          <span id="break-length"> 
            {' '}{this.state.timers[BREAK].minutes} 
            {this.state.timers[BREAK].minutes === 1 ? " minute": " minutes"} 
            </span>
        </p>
        <div className="control">
          <button id="break-increment" title="Break increment" 
            onClick={this.incDecTimer.bind(this, BREAK, 1)}>
            <i className="fa fa-plus"></i>
          </button>
          <button id="break-decrement" title="Break decrement" 
            onClick={this.incDecTimer.bind(this, BREAK, -1)}>
            <i className="fa fa-minus"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
