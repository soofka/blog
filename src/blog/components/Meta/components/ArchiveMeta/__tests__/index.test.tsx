import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { ArchiveMeta } from '../';

describe('<ArchiveMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <ArchiveMeta
        description="testDescription"
        keywords={['testKeyword1', 'testKeyword2', 'testKeyword3']}
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
