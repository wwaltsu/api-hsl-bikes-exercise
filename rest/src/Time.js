import React from 'react';

class Time extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Time">
        <p>Current Time : {this.state.curTime}</p>
      </div>
    );
  }
}

export default Time;