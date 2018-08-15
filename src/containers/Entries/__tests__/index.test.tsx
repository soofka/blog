import * as React from 'react';
import { shallow } from 'enzyme';

import { mockStoreProps, mockRouteProps } from 'common/testMocks';

import { Entries } from 'containers/Entries';

describe('<Entries/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Entries
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
