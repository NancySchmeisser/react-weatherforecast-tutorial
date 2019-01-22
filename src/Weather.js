import React, { Component } from 'react';
import WeekView from './WeekView';


class Weather extends Component {
  apiKey = "afdf27fdc3f898aa7cb96e245ca46d89";
  kelvinZero = -273.15;

  constructor(props) {
    super(props);
    this.state = {
      city: "test",
      data: undefined,
    }

  }
  handleChangeCity = (event) => {
    this.setState(
      {
        city: event.target.value
      }
    );
  }

  handleRefreshData = () => {
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
        <input type="text" id="ort" name="Ort" placeholder="Suche nach Ort" onChange={this.handleChangeCity} value={this.state.city} />
        <button id="button" onClick={this.handleRefreshData}>Refresh</button><br />
        {this.state.data ? <WeekView data={this.state.data} /> : "Bitte Refresh drücken"}
      </div>
    );
  }
}

export default Weather;