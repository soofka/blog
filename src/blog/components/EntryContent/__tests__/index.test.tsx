import { shallow } from 'enzyme';
import * as React from 'react';

import EntryContent from 'components/EntryContent';

describe('<EntryContent/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryContent
        content="testContent"
      />,
    )).toMatchSnapshot();
  });

});
