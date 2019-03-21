import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { EntriesByDateMeta } from '../';

describe('<EntriesByDateMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesByDateMeta
        date="testDate"
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
