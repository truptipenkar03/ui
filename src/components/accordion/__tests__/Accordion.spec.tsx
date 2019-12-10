import * as React from 'react';

import {
  mount, shallow
} from 'enzyme';

import {
  Accordion
} from '../Accordion';

import 'jest-styled-components';

describe('Accordion', () => {
  it('renders all children', () => {
    const wrapper = shallow(
      <Accordion>
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    expect(wrapper.exists('Accordion__Container')).toBe(true);
  });

  it('opens every clicked item', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(
      <Accordion
        onChange={mockOnChange}
      >
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    // target the headers to click
    const accordionItemHeader = wrapper.find('Header__StyledHeader');

    // click items 1 and 2
    accordionItemHeader.at(0).simulate('click');
    accordionItemHeader.at(1).simulate('click');

    expect(mockOnChange).toBeCalledWith(['1', '2']);

    // close the first item and make sure its closed
    accordionItemHeader.at(0).simulate('click');
    expect(mockOnChange).toBeCalledWith(['2']);

    // cleanup
    wrapper.unmount();
  });

  it('opens one clicked item at a time', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(
      <Accordion
        onChange={mockOnChange}
        classic
      >
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    // target the headers to click
    const accordionItemHeader = wrapper.find('Header__StyledHeader');

    // click items 1 and 2
    accordionItemHeader.at(0).simulate('click');
    accordionItemHeader.at(1).simulate('click');

    expect(mockOnChange).toBeCalledWith(['2']);

    // cleanup
    wrapper.unmount();
  });

  it('opens item 1 by default', () => {
    const wrapper = mount(
      <Accordion
        defaultSelectedItems={['1']}
      >
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    expect(wrapper.find('Collapse').at(0).prop('active')).toBe(true);
  });

  it('opens items that are passed in as external props', () => {
    const wrapper = mount(
      <Accordion
        defaultSelectedItems={['1']}
      >
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    wrapper.setProps({selectedItems: ['2']});

    expect(wrapper.find('Collapse').at(0).prop('active')).toBe(false);
    expect(wrapper.find('Collapse').at(1).prop('active')).toBe(true);
  });

});
