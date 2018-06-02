import * as React from 'react';
import { shallow } from 'enzyme';

import EntryHeader from 'components/EntryHeader';

describe('<EntryHeader/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryHeader
        title="testTitle"
        titleLink="testTitleLink"
        tags={['tag1', 'tag2', 'tag3']}
        created="testCreated"
        updated="testUpdated"
      />)).toMatchSnapshot();
  });

});
