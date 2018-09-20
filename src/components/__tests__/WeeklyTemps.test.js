import React from 'react';
import renderer from 'react-test-renderer';

import WeeklyTemps from '../WeeklyTemps';

describe('Weekly Temps Component', () => {
  it('Component should render given correct props', () => {
    let units = 'Fahrenheit'
    let weeklyTemps = [
      { tempC: 15, tempF: 80 },
      { tempC: 19, tempF: 75 },
      { tempC: 26, tempF: 60 },
      { tempC: 30, tempF: 65 },
      { tempC: 12, tempF: 80 },
      { tempC: 30, tempF: 55 },
    ]
    const tree = renderer.create(<WeeklyTemps units={units} weeklyTemps={weeklyTemps} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})