import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { EntriesMeta } from '../';

describe('<EntriesMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesMeta
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
