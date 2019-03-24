import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { EntriesByTagMeta } from '../meta';

describe('<EntriesByTagMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesByTagMeta
        tag={{
          id: 'testTagId',
          url: 'testTagUrl',
          name: 'testTagName',
        }}
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
