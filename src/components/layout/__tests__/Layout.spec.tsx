import * as React from 'react';

import { shallow } from 'enzyme';

import { Layout } from '../Layout';

describe('Layout', () => {
  it('renders Layout', () => {
    const wrapper = shallow(<Layout>children</Layout>);

    expect(wrapper.exists('Layout__Container')).toBe(true);
  });

  it('renders full layout', () => {
    const wrapper = shallow(
      <Layout>
        <Layout.Header>
          <span id="header">Header</span>
        </Layout.Header>
        <Layout.Content>
          <span id="content">Content</span>
        </Layout.Content>
        <Layout.Footer>
          <span id="footer">Footer</span>
        </Layout.Footer>
      </Layout>
    );

    expect(wrapper.exists('#header')).toBe(true);
    expect(wrapper.exists('#content')).toBe(true);
    expect(wrapper.exists('#footer')).toBe(true);
  });
});
