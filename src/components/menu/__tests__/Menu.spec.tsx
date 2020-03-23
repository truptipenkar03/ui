import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { Menu } from '../Menu';

describe('Menu', () => {
  it('renders', () => {
    const wrapper = shallow(<Menu></Menu>);

    expect(wrapper.exists('Menu__Container')).toBe(true);
  });

  it('renders with Menu.Item', () => {
    const wrapper = shallow(
      <Menu>
        <Menu.Item itemKey="1">
          <div id="item-1" />
        </Menu.Item>
        <Menu.Item itemKey="2">
          <div id="item-2" />
        </Menu.Item>
      </Menu>
    );

    expect(wrapper.exists('#item-1')).toBe(true);
    expect(wrapper.exists('#item-2')).toBe(true);
  });

  it('renders with Menu.Items in an Menu.ItemGroup', () => {
    const wrapper = shallow(
      <Menu>
        <Menu.ItemGroup title="Group 1">
          <Menu.Item itemKey="1">
            <div id="item-1" />
          </Menu.Item>
          <Menu.Item itemKey="2">
            <div id="item-2" />
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );

    expect(wrapper.exists('MenuItemGroup')).toBe(true);
    expect(wrapper.exists('#item-1')).toBe(true);
    expect(wrapper.exists('#item-2')).toBe(true);
  });

  it('should call onClick when Menu.Item is clicked', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(
      <Menu onClick={key => onClickMock(key)}>
        <Menu.Item itemKey="1">
          <div id="item-1" />
        </Menu.Item>
        <Menu.Item itemKey="2">
          <div id="item-2" />
        </Menu.Item>
      </Menu>
    );

    wrapper
      .find('MenuItem__Container')
      .at(0)
      .simulate('click');
    expect(onClickMock).toBeCalledWith('1');
  });

  it('should not call onClick when Menu.Item is disabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(
      <Menu onClick={() => onClickMock()}>
        <Menu.Item itemKey="1" disabled>
          <div id="item-1" />
        </Menu.Item>
        <Menu.Item itemKey="2">
          <div id="item-2" />
        </Menu.Item>
      </Menu>
    );

    wrapper
      .find('MenuItem__Container')
      .at(0)
      .simulate('click');
    expect(onClickMock).toBeCalledTimes(0);
  });
});
