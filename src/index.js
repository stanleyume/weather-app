import React from 'react';
import ReactDOM from 'react-dom';
import Day from './components/Day';
require('../public/css/weather-icons.min.css');
require('../public/css/style.css');

ReactDOM.render(
  <div style={{ textAlign: 'center' }}>
    <h1 className="title">Weather Man</h1>

    <Day day="Mon" t1="70" t2="68"/>
    <Day day="Tue"/>
    <Day day="Wed"/>
    <Day day="Thur"/>
    <Day day="Fri"/>
    <Day day="Sat"/>
    <Day day="Sun"/>
  </div>
, document.getElementById('app'));
