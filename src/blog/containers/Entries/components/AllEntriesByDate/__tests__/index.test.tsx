import { shallow } from 'enzyme';
import * as React from 'react';

import { mockRouteProps, mockStoreProps } from 'common/testMocks';

import AllEntriesByDate from 'containers/Entries/components/AllEntriesByDate';

describe('<AllEntriesByDate/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <AllEntriesByDate
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
