import * as React from 'react';
import { shallow } from 'enzyme';

import EntryHeaderTags from 'components/EntryHeader/components/EntryHeaderTags';

describe('<EntryHeaderTags/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryHeaderTags
        tags={['tag1', 'tag2', 'tag3']}
      />,
    )).toMatchSnapshot();
  });

});
