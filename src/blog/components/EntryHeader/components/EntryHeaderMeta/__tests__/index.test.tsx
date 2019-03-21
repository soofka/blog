import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryHeaderMeta } from '../';

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
