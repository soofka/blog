import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { EntryMeta } from '../meta';

describe('<EntryMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryMeta
        title="testTitle"
        description="testDescription"
        keywords={['testKeyword1', 'testKeyword2', 'testKeyword3']}
        imageFileName="testImageFileName"
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
