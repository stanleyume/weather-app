import React, { Component } from 'react';
import Day from './Day';
import moment from 'moment';

class Week extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.setState({ok:'cool'})
    // fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fda51081520e7a071880563598af1696')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Lagos,ng&APPID=fda51081520e7a071880563598af1696&cnt=7')
    .then((data) => data.json())
    .then(function(data){
      console.log(data);
      this.setState({location: 'Lagos, NG'});
      console.log(this.state);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render(){
    return (
        <div id="week">
          <div id="location">{ this.state.location }</div>
          <Day day="Mon" t1="70" t2="68"/>
          <Day day="Tue"/>
          <Day day="Wed"/>
          <Day day="Thur"/>
          <Day day="Fri"/>
          <Day day="Sat"/>
          <Day day="Sun"/>
        </div>
    );
  }


}

export default Week;
