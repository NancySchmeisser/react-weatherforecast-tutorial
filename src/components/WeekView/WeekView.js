import React, { Component } from 'react';
import DayView from '../DayView/DayView';


class WeekView extends Component {
 
  render() {
    

    return (
      [0,1,2,3,4].map(index=>
      <DayView key={index.toString()} weather={this.props.data[index].weather} weekDay={this.props.data[index].weekDay} highTemp={this.props.data[index].highTemp} lowTemp={this.props.data[index].lowTemp} />)
    );
  }
}

export default WeekView;