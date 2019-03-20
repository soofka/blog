import { shallow } from 'enzyme';
import * as React from 'react';

import { mockRouteProps, mockStoreProps } from 'common/testMocks';

import AllEntries from 'containers/Entries/components/AllEntries';

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
