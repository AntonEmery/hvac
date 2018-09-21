import React, { Component } from 'react';
import './App.css';
import HVACData from './components/HVACData';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
       weatherData: [],
       tempData: [],
       HVAC: [],
       loading: false,
       displayData: false
      }
  }

  submitRequest = () => {
    this.setState({ loading: true });
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
      // results is an array of arrays of the temp ranges for each day
      result.push(temps)
    })
    result.forEach(days => {
      let acOn = false;
      let acCounter = 0;
      let heatOn = false;
      let heatCounter = 0;
      // iterate thru each hourly temp in day
      days.forEach(temp => {
        // logic for determining if ac or heat was turned on
        if(temp > 75 && acOn === false) {
          acCounter++;
          acOn = true;
        }
        if(temp < 62 && heatOn === false) {
          heatCounter++;
          heatOn = true;
          acOn = false
        }
        if(temp <= 75 && temp >= 62) {
          acOn = false;
          heatOn = false;
        }
      })
      HVAC.push({acCounter, heatCounter})
    })
    this.setState({
      HVAC,
      loading: false,
      displayData: true
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
            value="View Data for Current Month"
            onClick={this.submitRequest}
          />
        {/* Display loading during API request */}
        {!this.state.displayData && this.state.loading && <p>Loading</p>}
        {this.state.displayData && <HVACData HVAC={this.state.HVAC} />}
      </div>
    );
  }
}

export default App;
