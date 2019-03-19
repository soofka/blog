import * as React from 'react';
import { shallow } from 'enzyme';

import { mockStoreProps } from 'common/testMocks';

import EntriesByDateMeta from 'components/Meta/components/EntriesByDateMeta';

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
