import * as React from 'react';

import { shallow } from 'enzyme';

import { Typography } from '../Typography';

describe('Typography', () => {
  it('renders Title', () => {
    const wrapper = shallow(<Typography.Title>Title</Typography.Title>);

    expect(wrapper.exists('Title__StyledTitle')).toBe(true);
  });

  it('sets the level prop', () => {
    const wrapper = shallow(
      <Typography.Title level={2}>Title</Typography.Title>
    );

    expect(wrapper.find('Title__StyledTitle').prop('level')).toEqual(2);
  });

  it('renders Subtitle', () => {
    const wrapper = shallow(
      <Typography.Subtitle>Subtitle</Typography.Subtitle>
    );

    expect(wrapper.exists('Subtitle__StyledSubtitle')).toBe(true);
  });

  it('renders Body', () => {
    const wrapper = shallow(<Typography.Body>Body</Typography.Body>);

    expect(wrapper.exists('Body__StyledBody')).toBe(true);
  });
});
