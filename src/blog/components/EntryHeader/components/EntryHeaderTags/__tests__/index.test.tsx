import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryHeaderTags } from '../';

describe('<EntryHeaderTags/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryHeaderTags
        tags={['tag1', 'tag2', 'tag3']}
      />,
    )).toMatchSnapshot();
  });

});
