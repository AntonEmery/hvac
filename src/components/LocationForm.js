import React, { Component } from 'react';


class LocationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: 'San Francisco'
    }
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value })
  }

  handleSubmit = (e) => {
    this.props.submitLocation(this.state.location);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="location">Location</label>
        <select
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
        >
          <option value="San Francisco">San Francisco, CA</option>
          <option value="Amsterdam">Amsterdam, Netherlands</option>
          <option value="Oakland">Oakland, CA</option>
          <option value="Rome">Rome, Italy</option>
          <option value="Cleveland">Cleveland, OH</option>
          <option value="Tel Aviv">Tel Aviv, Israel</option>
          <option value="New York">New York City, NY</option>
          <option value="Murmansk">Murmansk, Russia</option>
          <option value="Istanbul">Istanbul, Turkey</option>
        </select>
        <p>
          <input
            className="btn"
            type="submit"
            value="Submit"
          />
          </p>
      </form>
    )
  }
}

export default LocationForm