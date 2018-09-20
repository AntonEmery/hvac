import React, { Component } from 'react';
import './App.css';
import LocationForm from './components/LocationForm';
import DataWrapper from './components/DataWrapper';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
       daysInMonth: [],
       requestMade: false,
       weatherData: []
      }
  }

  componentDidMount() {
    let daysInMonth = []
    let date = moment().format('YYYY:MM:DD');
    console.log(date.replace(/:/g, '-'));
    let elapsedDaysInMonth = moment().startOf('month').fromNow();
    let daysLeft = parseInt(elapsedDaysInMonth.substring(0, 2));
    for(var i = daysLeft; i>0; i--) {
      let day = moment().subtract(i, 'days').format('YYYY-MM-DD');
      daysInMonth.push(day)
    }
    this.setState({
      daysInMonth
    })
  }

  submitRequest = () => {
    fetch('http://localhost:3000/data')
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          weatherData: result
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HVAC Data For PDX</h1>
        </header>
        <input
            className="btn"
            type="submit"
            value="Submit"
            onClick={this.submitRequest}
          />
      </div>
    );
  }
}

export default App;
