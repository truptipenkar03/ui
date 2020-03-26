import * as React from 'react';

import { shallow } from 'enzyme';

import { Divider } from '../Divider';

describe('Divider', () => {
  it('renders horizontal divider', () => {
    const wrapper = shallow(<Divider />);

    expect(wrapper.exists('StyledDivider')).toBe(true);
  });

  it('has the correct display name Divider', () => {
    const wrapper = shallow(
      <div>
        <Divider />
      </div>
    );

    expect(wrapper.find('Divider')).toExist();
  });

  it('sets component prop', () => {
    const wrapper = shallow(<Divider component={'li'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').component).toBe(
      'li'
    );
  });

  it('sets orientation prop', () => {
    const wrapper = shallow(<Divider orientation={'vertical'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').orientation).toBe(
      'vertical'
    );
  });

  it('no className prop', () => {
    const wrapper = shallow(<Divider />);

    expect(wrapper.find('StyledDivider').prop('className')).toBe(
      ' rtk-divider'
    );
  });

  it('sets className prop', () => {
    const wrapper = shallow(<Divider className="my-class" />);

    expect(wrapper.find('StyledDivider').prop('className')).toBe(
      'my-class rtk-divider'
    );
  });

  it('sets margin prop', () => {
    const wrapper = shallow(<Divider margin={'5px'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').margin).toBe(
      '5px'
    );
  });

  it('sets thickness prop', () => {
    const wrapper = shallow(<Divider thickness={'10px'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').thickness).toBe(
      '10px'
    );
  });

  it('sets text prop', () => {
    const wrapper = shallow(<Divider data-content="Some text" />);

    expect(wrapper.find('StyledDivider').prop('data-content')).toBe(
      'Some text'
    );
  });

  it('sets textAlign prop', () => {
    const wrapper = shallow(<Divider textAlign={'30px'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').textAlign).toBe(
      '30px'
    );
  });

  it('sets bgColor prop', () => {
    const wrapper = shallow(<Divider bgColor={'yellow'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').bgColor).toBe(
      'yellow'
    );
  });

  it('sets fontSize prop', () => {
    const wrapper = shallow(<Divider fontSize={'3'} />);

    // @ts-ignore
    expect(wrapper.find('StyledDivider').prop('customProps').fontSize).toBe(
      '3'
    );
  });
});
