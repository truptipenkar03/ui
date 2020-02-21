import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { Input } from '../Input';

describe('Input', () => {
  it('renders input', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.exists('StyledInput__Container')).toBe(true);
  });

  it('sets the placeholder', () => {
    const wrapper = mount(<Input placeholder="test" />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().placeholder).toBe('test');
  });

  it('sets the name and id for formik', () => {
    const wrapper = mount(<Input name="test" id="test-id" />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().name).toBe('test');

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().id).toBe('test-id');
  });

  it('sets the borderType prop to none', () => {
    const wrapper = shallow(<Input borderType={'none'} />);

    expect(wrapper.find('StyledInput').prop('borderType')).toBe('none');
  });

  it('sets the borderType prop to bottom', () => {
    const wrapper = shallow(<Input borderType={'bottom'} />);

    expect(wrapper.find('StyledInput').prop('borderType')).toBe('bottom');
  });

  it('sets the disabled prop', () => {
    const wrapper = mount(<Input disabled />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().disabled).toBe(true);
  });

  it('sets the error message and icon', () => {
    const wrapper = mount(
      <Input
        validationStatus={'error'}
        validationMessage={'This is the message'}
      />
    );

    expect(wrapper.exists('TimesSolid')).toBe(true);
    expect(wrapper.exists('StyledInput__Status')).toBe(true);
  });

  it('sets the error icon and removes the error message', () => {
    const wrapper = mount(
      <Input
        validationStatus={'error'}
        validationMessage={'This is the message'}
        hasFeedbackMessage={false}
      />
    );

    expect(wrapper.exists('TimesSolid')).toBe(true);
    expect(wrapper.exists('StyledInput__Status')).toBe(false);
  });

  it('sets the error message and removes the error icon', () => {
    const wrapper = mount(
      <Input
        validationStatus={'error'}
        validationMessage={'This is the message'}
        hasFeedbackIcon={false}
      />
    );

    expect(wrapper.exists('TimesSolid')).toBe(false);
    expect(wrapper.exists('StyledInput__Status')).toBe(true);
  });

  it('sets the custom validation message component', () => {
    const wrapper = mount(
      <Input
        validationStatus={'error'}
        validationMessage={'This is the message'}
        validationComponent={message => <div id={'test'} />}
      />
    );

    expect(wrapper.exists('#test')).toBe(true);
  });

  it('sets the label prop', () => {
    const wrapper = shallow(<Input label={'label'} />);

    expect(
      wrapper
        .find('StyledInput__Label')
        .children()
        .first()
        .text()
    ).toBe('label');
  });

  it('sets the htmlType prop', () => {
    const wrapper = mount(<Input htmlType={'password'} />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().type).toBe('password');
  });

  it('sets the inputSize prop', () => {
    const wrapper = shallow(<Input size={'large'} />);

    expect(wrapper.find('StyledInput').prop('inputSize')).toBe('large');
  });

  it('sets the value prop', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(<Input value={'test'} onChange={onChangeMock} />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().value).toBe('test');
  });

  it('sets the defaultValue prop', () => {
    const wrapper = mount(<Input defaultValue={'test'} />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().value).toBe('test');
  });

  it('sets the inputPrefix prop', () => {
    const wrapper = shallow(<Input inputPrefix={'A'} />);

    expect(wrapper.exists('StyledInput__Prefix')).toBe(true);
  });

  it('sets the inputSuffix prop', () => {
    const wrapper = mount(<Input inputSuffix={<div id="test" />} />);

    expect(wrapper.exists('#test')).toBe(true);
  });

  it('sets the readOnly prop', () => {
    const wrapper = mount(<Input readOnly />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().readOnly).toBe(true);
  });

  it('calls onBlur handler', () => {
    const onBlurMock = jest.fn();
    const wrapper = mount(<Input onBlur={onBlurMock} />);

    wrapper.find('input').simulate('blur');
    expect(onBlurMock).toBeCalled();
  });

  it('calls onFocus handler', () => {
    const onFocusMock = jest.fn();
    const wrapper = mount(<Input onFocus={onFocusMock} />);

    wrapper.find('input').simulate('focus');
    expect(onFocusMock).toBeCalled();
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Input onClick={onClickMock} />);

    wrapper.find('input').simulate('click');
    expect(onClickMock).toBeCalled();
  });

  it('calls onChange handler', () => {
    const onChangeMock = jest.fn(e => e);
    const wrapper = mount(<Input onChange={onChangeMock} value={'value'} />);

    wrapper.find('input').simulate('change');

    expect(onChangeMock.mock.results[0].value.target.value).toBe('value');
  });
});
