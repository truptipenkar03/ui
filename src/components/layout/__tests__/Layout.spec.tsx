import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { Layout } from '../Layout';

describe('Layout', () => {
  it('renders Layout', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.exists('StyledLayout__Container')).toBe(true);
  });
});
