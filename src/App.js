import React, { Component } from 'react';
import './App.css';
import LocationForm from './components/LocationForm';
import DataWrapper from './components/DataWrapper';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
       weatherData: []
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
