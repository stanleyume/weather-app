import React, { Component } from 'react';

class Day extends Component {
  render(){
    return (
      // <span>
        <div className="card">
          <div>{this.props.day}</div>
          <br/>
          <i className="wi wi-day-cloudy"></i>
          <br/>
          <div style={{ marginTop: '5px' }}>
            <span>{this.props.t1}</span>
            <span style={{ marginLeft: '10px' }}>{this.props.t2}</span>
          </div>
        </div>
      // </span>
    );
  }
}

export default Day;
