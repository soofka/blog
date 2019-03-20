import { shallow } from 'enzyme';
import * as React from 'react';

import { mockRouteProps, mockStoreProps } from 'common/testMocks';

import OneEntry from 'containers/Entries/components/OneEntry';

describe('<OneEntry/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <OneEntry
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
