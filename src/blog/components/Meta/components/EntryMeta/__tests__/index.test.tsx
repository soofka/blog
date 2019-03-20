import { shallow } from 'enzyme';
import * as React from 'react';

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
