import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'common/testMocks';

import Entry from 'containers/Entry';

const mockEntryProps = {
  title: 'testTitle',
  tags: ['tag1', 'tag2', 'tag3'],
  bried: null,
  created: 'testCreated',
  updated: 'testUpdated',
  contentFileName: 'testContentFileName',
  full: true,
};

describe('<Entry/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Entry
        {...mockStoreProps}
        {...mockEntryProps}
      />,
    )).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <Entry
        {...mockStoreProps}
        {...mockEntryProps}
        public={false}
      />,
    )).toMatchSnapshot();
  });

});
