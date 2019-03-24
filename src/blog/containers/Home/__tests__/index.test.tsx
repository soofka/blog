import { shallow } from 'enzyme';
import * as React from 'react';

import { mockRouteProps, mockStoreProps } from 'blog/common/testMocks';

import { Home } from '../';

describe('<Home/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Home
        {...mockStoreProps}
        {...mockRouteProps}
      />,
    )).toMatchSnapshot();
  });

});
