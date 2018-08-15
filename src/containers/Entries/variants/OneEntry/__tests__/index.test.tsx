import * as React from 'react';
import { shallow } from 'enzyme';

import { mockRouteProps, mockStoreProps } from 'common/testMocks';

import OneEntry from 'containers/Entries/variants/OneEntry';

describe('<OneEntry/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <OneEntry
        {...mockStoreProps}
        {...mockRouteProps}
      />)).toMatchSnapshot();
  });

});
