import * as React from 'react';

import { shallow } from 'enzyme';

import { Panel } from '../Panel';

describe('Panel', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Panel>
        <div id={'test1'} />
      </Panel>
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
  });

  it('has the correct display name', () => {
    const wrapper = shallow(
      <div>
        <Panel>
          <div id={'test1'} />
        </Panel>
      </div>
    );

    expect(wrapper.find('Panel')).toExist();
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <Panel onClick={onClickMock}>
        <div id={'test1'} />
      </Panel>
    );

    wrapper.simulate('click');

    expect(onClickMock).toBeCalled();
  });
});
