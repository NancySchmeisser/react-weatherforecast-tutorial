import React, { Component } from 'react';
import WeekView from './WeekView';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    }

  }
  refreshData = () => {
    this.setState(
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
      });

  }
  render() {

    return (
      <div>
        <label id="label">Geben Sie einen Ort ein</label><br />
        <input type="text" id="ort" name="Ort" placeholder="Suche nach Ort"/>
        <button id="button" onClick={this.refreshData}>Refresh</button><br />
        {this.state.data ? <WeekView data={this.state.data} /> : "Bitte Refresh drücken"}
      </div>
    );
  }
}

export default Weather;