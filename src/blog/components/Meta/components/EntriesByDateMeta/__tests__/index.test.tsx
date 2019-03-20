import { shallow } from 'enzyme';
import * as React from 'react';

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
