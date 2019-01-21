import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DayView from './DayView';

ReactDOM.render(<div><DayView highTemp={0} lowTemp={-1} weekDay="Montag" weather="cloudy" /><DayView highTemp={27} lowTemp={16} weekDay="Dienstag" weather="snowy" /><DayView highTemp={27} lowTemp={16} weekDay="Mittwoch" weather="snowy" /><DayView highTemp={27} lowTemp={16} weekDay="Donnerstag" weather="snowy" /><DayView highTemp={27} lowTemp={16} weekDay="Freitag" weather="snowy" /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
