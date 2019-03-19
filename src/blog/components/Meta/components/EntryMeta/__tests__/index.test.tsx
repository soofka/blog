import * as React from 'react';
import { shallow } from 'enzyme';

import { mockStoreProps } from 'common/testMocks';

import EntryMeta from 'components/Meta/components/EntryMeta';

describe('<EntryMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryMeta
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
