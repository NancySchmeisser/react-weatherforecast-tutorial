import React, { Component } from 'react';
import './DayView.css';
import sunnyImg from './sunny.png';
import cloudyImg from './cloudy.png';
import rainyImg from './rainy.png';
import hailImg from './hail.png';
import snowyImg from './snowy.png';



class DayView extends Component {
  render() {

    let img = sunnyImg;
    if (this.props.weather === "sunny") {
      img = sunnyImg;
    }
    else if (this.props.weather === "cloudy") {
      img = cloudyImg;
    }
    if (this.props.weather === "rain") {
      img = rainyImg;
    }
    if (this.props.weather === "hail") {
      img = hailImg;
    }
    if (this.props.weather === "snowy") {
      img = snowyImg;
    }

    return (
 <div class="dayview">
      <div class="weather">

        <div class="weekday">{this.props.weekDay}</div>
        <img src={img} alt='sunny' width="100px" height="100px" />
        <div class="tempHigh">{this.props.highTemp}°</div>
        <div class="tempLow">{this.props.lowTemp}°</div>
      </div>
      </div>
    );
  }
}

export default DayView;