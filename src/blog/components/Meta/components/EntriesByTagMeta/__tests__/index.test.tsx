import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';
import { EntriesByTagMeta } from '../';

describe('<EntriesByTagMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesByTagMeta
        tag="testTag"
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
