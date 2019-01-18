import React, { Component } from 'react';
import './DayView.css';
import sunny from './sunny.png';



class DayView extends Component {
  render() {
    return (
        
      <div class="weather">
     
     <div class="weekday">Mittwoch</div>
     <img src={sunny} alt='sunny' width="100px" height="100px"/>
     <div class="tempHigh">25°</div>
     <div class="tempLow">17°</div>
      </div>
    );
  }
}

export default DayView;