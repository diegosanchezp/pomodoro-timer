import React from 'react';
import './Timer.css';

// Machine states
const RUNNING = 'running';
const RESETED = 'reseted';
const PAUSED = 'paused';

function initialState(hours = 0, minutes = 25, seconds = 0){
  // Craft a date
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
}

class Timer extends React.Component{

  static defaultProps = {
    timers: [{
      hours: 0,
      minutes: 25,
      seconds: 0,
    }],
    onPause: () => {},
    onReset: () => {},
    onStart: () => {},
    onStop: () => {},
  }

  constructor(props) {
    super(props);
    const {hours, minutes, seconds} = props.timers[0]
    // Set the date to 0 hours and 25 minutes
    this.state = {
      date: initialState(hours, minutes, seconds),
      index: 0,     
      timerState: RESETED,
      changed: false,
    };
  }

  addSeconds(seconds){
    this.setState(({date, timerState})=>{
      const newTime = new Date(date);
      newTime.setSeconds(newTime.getSeconds()+seconds);
      return {
        date: newTime,
        timerState: RUNNING,
        changed: false
      }
    });
  }

  addMinute(minutes){
    this.addSeconds(60*minutes);
  }

  startTimer(){
    this.timerID = setInterval(
      () => this.addSeconds(-1),
      1000
    );
  }

  pauseTimer(){
    clearInterval(this.timerID);  
    this.setState({
      timerState: PAUSED
    });
    // this.props.onPause();
  }
  startPause(){
    const {timerState} = this.state;
    if(timerState === RESETED || timerState === PAUSED){
      // Start the timer
      this.timerID = setInterval(
        () => this.addSeconds(-1),
        1000
      );
    }else if(timerState === RUNNING){
      // Pause the timer
      clearInterval(this.timerID);  
      this.setState({
        timerState: PAUSED
      });
    }
  }

  resetTimer(){
    const {index} = this.state;
    const {hours, minutes, seconds} = this.props.timers[index]; 
    clearInterval(this.timerID);  
    this.setState({
      date: initialState(hours,minutes,seconds),
      timerState: RESETED
    });
  }

  getTimeString(){
    let srTime = this.state.date.toTimeString();
    // Get hh:mm:ss
    srTime = srTime.split(' ')[0];
    // Get mm:ss
    return srTime.slice(3,); 
  }

  componentWillUnmount() {
    clearInterval(this.timerID);  
  }

  componentDidMount(){
    // document.addEventListener()
    console.log(this.state.timerState);
  }

  nextTimer(nextIndex){
    const {hours, minutes, seconds} = this.props.timers[nextIndex]; 
    this.setState({
      date: initialState(hours,minutes,seconds),
      index: nextIndex,
      // timerState: RUNNING,
      changed: true
    });
  }

  fowardTimer(){
    const {index} = this.state;
    const {timers} = this.props;

    //Advance to next timer 
    if(index === timers.length - 1){
      // If we reached the last timer loop back to the first
      this.nextTimer(0);
    }else{
      this.nextTimer(index + 1);
    }
  }

  componentDidUpdate(prevProps, prevState){
    const {date, index} = this.state;
    if(date.getSeconds() === 0 && date.getMinutes() === 0){
      // Timer has stopped, we then need to advance to next timer
      this.fowardTimer();
    }
    // If timers have been changed by parent then rerender
    if(JSON.stringify(this.props.timers) !== JSON.stringify(prevProps.timers)){

      const {hours, minutes, seconds} = this.props.timers[index]; 
      this.setState({
        date: initialState(hours,minutes,seconds),
      })
    }
  }

  render(){
    return (
      <div id="timer-box" >
        <p id="time-left">{this.getTimeString()}</p>
        <p id="timer-label" data-timer-state={this.state.timerState}>Session: {this.state.timerState}</p>
        <p>{this.props.timers[this.state.index].name} time!</p>
        <div id="actions">
          <button id="start_stop" 
          title={"Play or Stop timer"} 
          onClick={this.startPause.bind(this)}>
            { 
              (() =>{
                if(this.state.timerState === PAUSED || this.state.timerState === RESETED){
                  return <i className="fa fa-play"></i>
                }else if (this.state.timerState === RUNNING){
                  return  <i className="fa fa-pause"></i>  
                }
              })()
            }
          </button>
          <button id="reset" onClick={this.resetTimer.bind(this)}>Reset timer</button>
          <button title="Foward timer" onClick={this.fowardTimer.bind(this)}>
            <i className="fa fa-forward"></i>
          </button>
          {this.state.changed && 
            <audio 
              autoPlay
              src="http://soundbible.com/mp3/Door Bell-SoundBible.com-1986366504.mp3">
            </audio> }
        </div>
      </div>
    );
  }
}

export default Timer;