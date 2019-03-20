import { shallow } from 'enzyme';
import * as React from 'react';

import EntryBackLink from 'components/EntryHeader/components/EntryBackLink';

describe('<EntryBackLink/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryBackLink
        created="testCreated"
        updated="testUpdated"
      />,
    )).toMatchSnapshot();
  });

});
