import React, { Component } from 'react';
import './DayView.css';
import sunny from './sunny.png';



class DayView extends Component {
  render() {
    return (
      <div>
     Welcome to Weather Forecast!
     <img src='sunny.png' alt={sunny} width="50px" height="50px"/>
      </div>
    );
  }
}

export default DayView;