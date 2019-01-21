import React, { Component } from 'react';
import WeekView from './WeekView';


class Weather extends Component {
  constructor(props) {
    super(props);

    this.state =
      {
        data: [
          {
            weekDay: "Montag",
            weather: "sunny",
            highTemp: 5,
            lowTemp: -1,
          },
          {
            weekDay: "Dienstag",
            weather: "sunny",
            highTemp: 5,
            lowTemp: -1,
          },
          {
            weekDay: "Mittwoch",
            weather: "sunny",
            highTemp: 5,
            lowTemp: -1,
          },
          {
            weekDay: "Donnerstag",
            weather: "sunny",
            highTemp: 5,
            lowTemp: -1,
          },
          {
            weekDay: "Freitag",
            weather: "sunny",
            highTemp: 5,
            lowTemp: -1,
          }
        ]
      }
  }
  render() {

    return (
      <WeekView data={this.state.data}/>
    );
  }
}

export default Weather;