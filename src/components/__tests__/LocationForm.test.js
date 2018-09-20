import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import LocationForm from '../LocationForm';

configure({ adapter: new Adapter() });

describe('Location form component', () => {
  it('Component renders correctly', () => {
    const tree = renderer.create(<LocationForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Select input should change the state of form', () => {
    let form = shallow(<LocationForm />);
      form.find('select').simulate('change', { target: { value: 'Oakland' }})
      expect(form.state('location')).toEqual('Oakland')
  })
})




