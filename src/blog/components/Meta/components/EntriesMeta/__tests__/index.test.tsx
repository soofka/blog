import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'common/testMocks';

import EntriesMeta from 'components/Meta/components/EntriesMeta';

describe('<EntriesMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesMeta
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

});
