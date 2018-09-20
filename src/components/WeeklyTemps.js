import React, { Component } from 'react';


class WeeklyTemps extends Component {

  render() {
    const { weeklyTemps, units } = this.props;
    // set a var equal to the current temp units
    let temp = units === 'Celsius' ? 'tempC' : 'tempF';
    // get the avg weekly temp, use the temp var above to dynamically specify C or F
    const avgWeeklyTemp = weeklyTemps.reduce((a, b) => a + b[temp], 0) / weeklyTemps.length;
    return (
      // don't render until avg weekly temp is populated
      !isNaN(avgWeeklyTemp) &&
      <div>
        <p>Average Weekly Temperature</p>
        <p>{ avgWeeklyTemp.toFixed() } degrees</p>
      </div>
    );
  }
}

export default WeeklyTemps;