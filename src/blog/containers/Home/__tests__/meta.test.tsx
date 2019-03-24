import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { HomeMeta } from '../meta';

describe('<HomeMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <HomeMeta
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
