import React, { Component } from 'react';
import './App.css';
import DataWrapper from './components/DataWrapper';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
       weatherData: [],
       tempData: []
      }
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
        this.parseData();
      })
  }

  parseData = () => {
    let HVAC = []
    let result = []
    let tempData = this.state.weatherData.slice();
    // iterate through array of objects that contain all the temperature data
    // each inner array index is a hourly temp reading
    tempData.forEach((item, index) => {
      let temps = item[index].map(item => {
        return(item.temperature)
      })
      // results is an array of arrays of the temp ranges for each hour of the day
      result.push(temps)
    })
    console.log(result)
    // iterate thru array of temp ranges for each hour
    result.forEach(hour => {
      let highLow = hour.map(temp => {
        let acOn;
        let acCounter = 0;
        let heatOn;
        let heatCounter = 0;
        // logic for determining if ac or heat was turned on
        if(temp > 75) {
          acCounter++;
          acOn = true;
        }
        if(temp < 62) {
          heatCounter++;
        }
        return { acCounter, heatCounter }
      })
      HVAC.push(highLow)
    })
  }

  // algorithim for getting high/low
  // need acOn, heatOn, acCounter, heatCounter variables
  // go through each item in array.
    // if temp is greater than 75.
      // iterate ac counter, seat acOn to true
    // if next number is over 75 and acOn is true
      // do not iterate counter
    // if next number is less than or equal to 75 but greater than or equal to 62
      // acOn is false
    // if next number is less than 62
      // heatOn is true, iterate heat counter
    // if next number is less than 62 and heatOn is true
      // do not iterate heat counter
    // if next number greater than or equal to 62 and less than or equal to 75
      // heatOn is false

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
