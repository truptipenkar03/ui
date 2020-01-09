import * as React from 'react';

import {
  mount, ReactWrapper,
  shallow
} from "enzyme";

import {
  Collapse
} from '../Collapse';

import {
  act
} from 'react-dom/test-utils';

describe('Collapse', () => {
  it('renders without children', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'} />
    );

    expect(wrapper.find('Content').children()).toHaveLength(0);
  });

  it('renders with children', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'}>
        Content
      </Collapse>
    );

    expect(wrapper.find('Content').children()).toHaveLength(1);
  });

  it('renders header content', () => {
    const wrapper = shallow(
      <Collapse
        itemKey={'test'}
        header={'Header'}
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('Header').children()).toHaveLength(1);
  });

  it('sets the defaultExpanded prop', () => {
    const onChangeMock = jest.fn();

    const wrapper = shallow(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
        defaultExpanded
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('Header').prop('expanded')).toBe(true);
  });

  it('sets the destroyOnClose prop', () => {
    const wrapper = shallow(
      <Collapse
        itemKey={'test'}
        header={'Header'}
        destroyOnClose
      >
        Content
      </Collapse>
    );

   expect(wrapper.find('ContentContainer').prop('destroyOnClose')).toBe(true);
  });

  it('destroys content on close', async () => {
    const wrapper = mount(
      <Collapse
        itemKey={'test'}
        header={'Header'}
        defaultExpanded
        destroyOnClose
      >
        Content
      </Collapse>
    );

    expect(wrapper.exists('Content')).toBe(true);

    // creating a promise with a setTimeout so we can wait for the animation of the collapse
    // closing to finish before checking the dom
    const promise = new Promise<ReactWrapper<any>>((resolve) => {
      wrapper.setProps({expanded: false});
      wrapper.update();

      // wait for the animation to finish
      setTimeout(() => {
        wrapper.update();
        resolve(wrapper.find('ContentContainer'));
      }, 200)
    });

    let contentContainer: ReactWrapper;
    await act(async () => {
      contentContainer = await promise;
    });

    // @ts-ignore
    expect(contentContainer.exists('Content')).toBe(false);
  });

  it('calls onChange handler', () => {
    const onChangeMock = jest.fn();

    // need to mount to the DOM in order for event to propagate
    const wrapper = mount(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
      >
        Content
      </Collapse>
    );

    wrapper.find('Header__StyledHeader').simulate('click');
    expect(onChangeMock).toBeCalledWith('test');
    expect(wrapper.find('Header').prop('expanded')).toBe(true);
  });
});
