import React, { Component } from 'react';
import './App.css';
import LocationForm from './components/LocationForm';
import DataWrapper from './components/DataWrapper';
import moment from 'moment';

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
    let result = []
    let tempData = this.state.weatherData.slice();
    tempData.forEach((item, index) => {
      let temps = item[index].map(item => {
        return(item.temperature)
      })
      result.push(temps)
    })
    console.log(result)
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
