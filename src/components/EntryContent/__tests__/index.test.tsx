import * as React from 'react';
import { shallow } from 'enzyme';

import EntryContent from 'components/EntryContent';

describe('<EntryContent/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntryContent content="testContent" />)).toMatchSnapshot();
  });

});
