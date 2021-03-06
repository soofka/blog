import * as React from 'react';
import { shallow } from 'enzyme';

import { mockRouteProps, mockStoreProps } from 'common/testMocks';

import AllEntriesByTag from 'containers/Entries/components/AllEntriesByTag';

describe('<AllEntriesByTag/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <AllEntriesByTag
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
