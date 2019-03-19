import * as React from 'react';
import { shallow } from 'enzyme';

import EntryFooter from 'components/EntryFooter';

describe('<EntryFooter/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntryFooter/>)).toMatchSnapshot();
  });

});
