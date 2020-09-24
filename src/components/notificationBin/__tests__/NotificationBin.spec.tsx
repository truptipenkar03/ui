import * as React from 'react';

import { shallow } from 'enzyme';

import { NotificationBin, NotificationType } from '../NotificationBin';

const notifications: NotificationType[] = [
  {
    itemKey: '1',
    title: 'Title',
    notificationType: 'success',
  },
];

describe('NotificationBin', () => {
  it('renders', () => {
    const mockOnRemove = jest.fn();
    const wrapper = shallow(
      <NotificationBin notifications={notifications} onRemove={mockOnRemove} />
    );
    expect(wrapper.exists('Notification')).toBe(true);
  });
});
