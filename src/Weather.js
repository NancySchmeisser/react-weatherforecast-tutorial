import React, { Component } from 'react';
import WeekView from './WeekView';


class Weather extends Component {
  apiKey = "afdf27fdc3f898aa7cb96e245ca46d89";
  kelvinZero = -273.15;
  weekDayTexts = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ]
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
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Schmalkalden,DE&appid=afdf27fdc3f898aa7cb96e245ca46d89")
      .then(result => result.json())
      .then(data => {

        const forecast = data.list.slice(5, 10).map(item => {
          let weather="sunny";
          if (item.weather[0].id < 599){
            weather="rain"
          }
          if (item.weather[0].id > 599 && item.weather[0].id < 699){
            weather="snowy"
          }
          if (item.weather[0].id > 699 && item.weather[0].id <799){
            weather="cloudy"
          }
          if (item.weather[0].id > 800){
            weather="cloudy"
          }

          return ({
            weekDay: this.weekDayTexts[new Date(item.dt * 1000).getDay()],
            highTemp: Math.round((item.main.temp_max + this.kelvinZero) * 10) / 10,
            lowTemp: Math.round((item.main.temp_min + this.kelvinZero) * 10) / 10,
            weather: weather,
          });
        }
        );

        this.setState(
          {
            data: forecast
          }
        )
      })

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