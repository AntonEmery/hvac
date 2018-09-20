import React from 'react';
import renderer from 'react-test-renderer';

import DailyTemps from '../DailyTemps';


describe('Avg Daily temps component', () => {
  it('Component renders correctly given correct props', () => {
    let tempHistory = [
      { tempC: 15, tempF: 80 },
      { tempC: 19, tempF: 75 },
      { tempC: 26, tempF: 60 },
      { tempC: 30, tempF: 65 },
      { tempC: 12, tempF: 80 },
      { tempC: 30, tempF: 55 },
    ]
    let units = 'Celsius'
    const tree = renderer.create(<DailyTemps tempHistory={tempHistory} units={units} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
