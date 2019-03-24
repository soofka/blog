import { shallow } from 'enzyme';
import * as React from 'react';

import { mockRouteProps, mockStoreProps } from 'blog/common/testMocks';

import { EntriesByTag } from '../';

describe('<EntriesByTag/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesByTag
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
