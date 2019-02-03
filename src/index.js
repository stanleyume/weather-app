import React from 'react';
import ReactDOM from 'react-dom';
import Day from './components/Day';
import Week from './components/Week';
require('../public/css/weather-icons.min.css');
require('../public/css/style.css');

ReactDOM.render(
  <div style={{ textAlign: 'center' }}>
    <h1 className="title">Weather Man</h1>

    <Week/>
  </div>
, document.getElementById('app'));
