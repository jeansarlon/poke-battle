import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hand from '..';

test('should mount Component', () => {
  const wrapper = shallow(<Hand />);
  const tree = toJson(wrapper);
  const hasHandClass = wrapper.hasClass('hand');
  expect(tree).toMatchSnapshot();

  expect(hasHandClass).toBeTruthy();
});

