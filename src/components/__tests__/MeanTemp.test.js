import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';

import MeanTemp from '../MeanTemp';

describe('Mean temp component', () => {
  it('Component should render correctly given props', () => {
    let maxTemp = 30;
    let minTemp = 20;
    const tree = renderer.create(<MeanTemp maxTemp={maxTemp} minTemp={minTemp} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

