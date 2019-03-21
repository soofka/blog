import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryHeader } from '../';

describe('<EntryHeader/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryHeader
        title="testTitle"
        titleLink="testTitleLink"
        tags={['tag1', 'tag2', 'tag3']}
        created="testCreated"
        updated="testUpdated"
      />,
    )).toMatchSnapshot();
  });

  it('renders correctly when entry is full', () => {
    expect(shallow(
      <EntryHeader
        title="testTitle"
        titleLink="testTitleLink"
        tags={['tag1', 'tag2', 'tag3']}
        created="testCreated"
        updated="testUpdated"
        full={true}
      />,
    )).toMatchSnapshot();
  });

});
