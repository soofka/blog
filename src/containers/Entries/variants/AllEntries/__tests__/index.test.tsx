import * as React from 'react';
import { shallow } from 'enzyme';

import { mockStoreProps, mockRouteProps } from 'common/testMocks';

import AllEntries from 'containers/Entries/variants/AllEntries';

describe('<AllEntries/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <AllEntries
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
