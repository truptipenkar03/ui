import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { Toggle } from '../Toggle';

describe('Toggle', () => {
  it('renders', () => {
    const wrapper = shallow(<Toggle />);

    expect(wrapper.exists('Toggle__Container')).toBe(true);
  });

  it('sets the isOn prop', () => {
    const wrapper = mount(<Toggle isOn />);

    expect(wrapper.find('Toggle__ToggleCircleContainer').prop('animate')).toBe(
      'on'
    );
  });

  it('sets the disabled prop', () => {
    const wrapper = mount(<Toggle disabled />);

    expect(wrapper.find('Toggle__Container').prop('disabled')).toBe(true);
  });

  it('calls the onClick callback', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<Toggle onClick={onClickMock} />);

    wrapper.find('Toggle__Container').simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
