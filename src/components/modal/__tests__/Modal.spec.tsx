import * as React from 'react';

import {
  mount,
  shallow
} from 'enzyme';

import {
  Modal,
  ModalProps
} from '../..';

describe('Modal', () => {
  const defaultProps: ModalProps = {
    onOk: jest.fn(),
    onCancel: jest.fn(),
    visible: true
  };

  const defaultContent = <div id="content" />;

  it('renders the modal on mount', () => {
    const wrapper = shallow(
      <Modal
        {...defaultProps}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.exists('#content')).toBe(true);
  });

  it('sets the closable prop', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
        closable={true}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.exists('TimesSolid')).toBe(true);
  });

  it('sets the closeIcon prop', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
        closeIcon={<div id="icon" />}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.exists('#icon')).toBe(true);
    expect(wrapper.exists('TimesSolid')).toBe(false);
  });

  it('sets the cancelButtonProps prop', () => {
    const buttonProps: any = {
      shape: 'circle'
    };

    const wrapper = mount(
      <Modal
        {...defaultProps}
        cancelButtonProps={{...buttonProps}}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.find('DefaultFooter').childAt(1).prop('shape')).toEqual('circle');
  });

  it('sets the cancelButtonText prop', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
        cancelButtonText={'Leave'}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.find('DefaultFooter').childAt(1).find('button').text()).toEqual('Leave');
  });

  it('sets the footer prop', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
        footer={<div id="footer" />}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.exists('#footer')).toBe(true);
    expect(wrapper.exists('DefaultFooter')).toBe(false);
  });

  it('sets the okButtonText prop', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
        okButtonText={'Add'}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.find('DefaultFooter').childAt(0).find('button').text()).toEqual('Add');
  });

  it('sets the okButtonProps prop', () => {
    const buttonProps: any = {
      shape: 'circle'
    };

    const wrapper = mount(
      <Modal
        {...defaultProps}
        okButtonProps={{...buttonProps}}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.find('DefaultFooter').childAt(0).prop('shape')).toEqual('circle');
  });

  it('sets the title prop', () => {
    const wrapper = shallow(
      <Modal
        {...defaultProps}
        title={'Title'}
      >
        {defaultContent}
      </Modal>
    );

    expect(wrapper.find('Header').childAt(0).text()).toEqual('Title');
  });

  it('sets the visible prop', () => {
    const wrapper = shallow(
      <Modal
        {...defaultProps}
        title={'Title'}
      >
        {defaultContent}
      </Modal>
    );

    wrapper.setProps({ visible: false });
    expect(wrapper.exists('#content')).toBe(false);
  });


  it('calls onOk callback', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
      >
        {defaultContent}
      </Modal>
    );

    const okButton = wrapper.find('DefaultFooter').childAt(0);
    okButton.simulate('click');
    expect(defaultProps.onOk).toHaveBeenCalled();
  });

  it('calls onCancel callback', () => {
    const wrapper = mount(
      <Modal
        {...defaultProps}
      >
        {defaultContent}
      </Modal>
    );

    const okButton = wrapper.find('DefaultFooter').childAt(1);
    okButton.simulate('click');
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });
});
