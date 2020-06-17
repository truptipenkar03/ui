import * as React from 'react';

import { shallow } from 'enzyme';

import { FormItem } from '../FormItem';

describe('FormItem', () => {
  it('renders', () => {
    const wrapper = shallow(
      <FormItem>
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('FormItem__Container')).toBe(true);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <FormItem>
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('#test')).toBe(true);
  });

  it('renders message when set', () => {
    const wrapper = shallow(
      <FormItem status="error" message="this is a message">
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('FormItem__StatusMessage')).toBe(true);
  });

  it('sets the status prop', () => {
    const wrapper = shallow(
      <FormItem status="warning" message="this is a message">
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.find('FormItemIcon').prop('status')).toBe('warning');
  });

  it('sets the hasIcon', () => {
    const wrapper = shallow(
      <FormItem status="warning" message="this is a message" hasIcon={false}>
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('FormItemIcon')).toBe(false);
  });
});
