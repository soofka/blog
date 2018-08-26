import * as React from 'react';
import { shallow } from 'enzyme';

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
