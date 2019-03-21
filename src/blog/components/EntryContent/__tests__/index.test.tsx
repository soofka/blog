import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryContent } from '../';

describe('<EntryContent/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryContent
        content="testContent"
      />,
    )).toMatchSnapshot();
  });

});
