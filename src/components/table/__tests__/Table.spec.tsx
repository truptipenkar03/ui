import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { Table, ColumnProps } from '../Table';

interface Test {
  key: string;
  name: string;
  age: number;
}

describe('Table', () => {
  const columns: ColumnProps<Test>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      render: ({ record: { age } }) => <div id="test">{age}</div>,
      width: 10,
      sortable: true,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
    },
  ];

  const data: Test[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 61,
    },
  ];

  it('renders', () => {
    const wrapper = shallow(<Table columns={columns} data={data} />);

    expect(wrapper.find('TableHead')).toExist();
    expect(wrapper.find('TableBody')).toExist();
  });

  it('renders the dataIndex', () => {
    const wrapper = mount(<Table columns={columns} data={data} />);

    expect(
      wrapper
        .find('Body__StyledBody')
        .at(1)
        .childAt(0)
        .text()
    ).toStrictEqual('61');
  });

  it('renders a custom renderer', () => {
    const wrapper = mount(<Table columns={columns} data={data} />);

    expect(wrapper.find('#test')).toExist();
    expect(wrapper.find('#test')).toHaveText(data[0].age.toString());
  });

  it('renders a the empty state when there is no data', () => {
    const wrapper = mount(
      <Table columns={columns} data={data} emptyComponent={<div id="test" />} />
    );

    expect(wrapper.find('#test')).toExist();
  });

  it('renders loading state when loading is true', () => {
    const wrapper = mount(<Table columns={columns} data={data} loading />);

    expect(wrapper.find('Loading')).toExist();
  });

  it('renders custom loading component when loading is true', () => {
    const wrapper = mount(
      <Table
        columns={columns}
        data={data}
        loading
        loadingComponent={<div id="test" />}
      />
    );

    expect(wrapper.find('#test')).toExist();
  });

  it('calls onSort callback with the key and state', () => {
    const onSortMock: any = jest.fn();

    const wrapper = mount(
      <Table
        columns={columns}
        data={data}
        onSort={(key, state) => onSortMock(key, state)}
      />
    );

    wrapper
      .find('HeaderCell__StyledCell')
      .at(0)
      .simulate('click');

    expect(onSortMock).toBeCalledWith('name', 'asc');

    wrapper
      .find('HeaderCell__StyledCell')
      .at(0)
      .simulate('click');

    expect(onSortMock).toBeCalledWith('name', 'dsc');

    wrapper
      .find('HeaderCell__StyledCell')
      .at(0)
      .simulate('click');

    expect(onSortMock).toBeCalledWith('name', 'none');
  });

  describe('Table Columns', () => {
    it('renders the title', () => {
      const wrapper = mount(<Table columns={columns} data={data} />);

      expect(
        wrapper
          .find('HeaderCell__SubtitleContent')
          .at(0)
          .childAt(0)
          .text()
      ).toStrictEqual('Name');
    });

    it('sets the width prop', () => {
      const wrapper = mount(<Table columns={columns} data={data} />);

      expect(
        wrapper
          .find('th')
          .at(0)
          .prop('width')
      ).toStrictEqual(10);
    });

    it('sets the sortable prop', () => {
      const wrapper = mount(<Table columns={columns} data={data} />);

      expect(
        wrapper
          .find('HeaderCell__StyledCell')
          .at(0)
          .prop('sortable')
      ).toBe(true);
      expect(
        wrapper
          .find('HeaderCell__StyledCell')
          .at(0)
          .find('Sort')
      ).toExist();
    });
  });
});
