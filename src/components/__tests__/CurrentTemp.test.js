import React from 'react';
import renderer from 'react-test-renderer';
import CurrentTemp from '../CurrentTemp';

describe('Current temp component', () => {
  it('Component renders given correct prop', () => {
    const currentTemp = 30;
    const tree = renderer.create(<CurrentTemp currentTemp={currentTemp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
