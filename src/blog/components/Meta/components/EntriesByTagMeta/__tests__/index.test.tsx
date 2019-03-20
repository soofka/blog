import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'common/testMocks';

import EntriesByTagMeta from 'components/Meta/components/EntriesByTagMeta';

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
