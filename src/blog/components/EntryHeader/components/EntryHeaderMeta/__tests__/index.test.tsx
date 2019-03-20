import { shallow } from 'enzyme';
import * as React from 'react';

import EntryHeaderMeta from 'components/EntryHeader/components/EntryHeaderMeta';

describe('<EntryHeaderMeta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryHeaderMeta
        created="testCreated"
        updated="testUpdated"
      />,
    )).toMatchSnapshot();
  });

});
